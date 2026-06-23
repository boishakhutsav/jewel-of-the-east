import { type Backend, ExternalBlob, createActor } from "@/backend";
import { useEffect, useMemo, useState } from "react";

const CANISTER_ID_KEYS = [
  "VITE_CANISTER_ID",
  "CANISTER_ID",
  "CANISTER_ID_BACKEND",
];

function getCanisterIdFromEnvJson(): { id: string; source: string } | null {
  if (
    typeof window !== "undefined" &&
    (window as unknown as Record<string, unknown>).__ENV
  ) {
    const env = (window as unknown as Record<string, unknown>).__ENV as Record<
      string,
      string
    >;
    if (env.backend_canister_id && env.backend_canister_id !== "undefined") {
      return {
        id: env.backend_canister_id,
        source: "window.__ENV.backend_canister_id",
      };
    }
  }
  return null;
}

function getCanisterId(): { id: string; source: string } | null {
  // Check import.meta.env (Vite)
  if (typeof import.meta !== "undefined" && import.meta.env) {
    for (const key of CANISTER_ID_KEYS) {
      const val = import.meta.env[key];
      if (val) {
        return { id: val as string, source: `import.meta.env.${key}` };
      }
    }
  }

  // Check process.env (Node / some build systems)
  if (typeof process !== "undefined" && process.env) {
    for (const key of CANISTER_ID_KEYS) {
      const val = process.env[key];
      if (val) {
        return { id: val, source: `process.env.${key}` };
      }
    }
  }

  // Check window.__ENV (runtime injected env)
  if (typeof window !== "undefined") {
    const win = window as unknown as Record<string, unknown>;
    if (win.__ENV) {
      const env = win.__ENV as Record<string, string>;
      for (const key of CANISTER_ID_KEYS) {
        const val = env[key];
        if (val) {
          return { id: val, source: `window.__ENV.${key}` };
        }
      }
    }
  }

  // Check globalThis.__ENV
  if (typeof globalThis !== "undefined") {
    const gt = globalThis as unknown as Record<string, unknown>;
    if (gt.__ENV) {
      const env = gt.__ENV as Record<string, string>;
      for (const key of CANISTER_ID_KEYS) {
        const val = env[key];
        if (val) {
          return { id: val, source: `globalThis.__ENV.${key}` };
        }
      }
    }
  }

  return null;
}

function getCanisterIdError(): string {
  const checked: string[] = [];

  if (typeof import.meta !== "undefined" && import.meta.env) {
    for (const key of CANISTER_ID_KEYS) {
      checked.push(
        `import.meta.env.${key} = ${import.meta.env[key] ?? "undefined"}`,
      );
    }
  } else {
    checked.push("import.meta.env = undefined");
  }

  if (typeof process !== "undefined" && process.env) {
    for (const key of CANISTER_ID_KEYS) {
      checked.push(`process.env.${key} = ${process.env[key] ?? "undefined"}`);
    }
  } else {
    checked.push("process.env = undefined");
  }

  if (typeof window !== "undefined") {
    const win = window as unknown as Record<string, unknown>;
    if (win.__ENV) {
      const env = win.__ENV as Record<string, string>;
      for (const key of CANISTER_ID_KEYS) {
        checked.push(`window.__ENV.${key} = ${env[key] ?? "undefined"}`);
      }
    } else {
      checked.push("window.__ENV = undefined");
    }
  } else {
    checked.push("window = undefined");
  }

  return `Canister ID not found. Checked:\n${checked.join("\n")}`;
}

async function uploadFile(
  file: ExternalBlob,
): Promise<Uint8Array<ArrayBuffer>> {
  return file.getBytes();
}

async function downloadFile(
  bytes: Uint8Array<ArrayBufferLike>,
): Promise<ExternalBlob> {
  return ExternalBlob.fromBytes(bytes as Uint8Array<ArrayBuffer>);
}

export function useBackendActor() {
  const [actor, setActor] = useState<Backend | null>(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let result = getCanisterId();
    if (!result) {
      result = getCanisterIdFromEnvJson();
    }
    if (!result) {
      setError(getCanisterIdError());
      setIsFetching(false);
      return;
    }
    try {
      const backend = createActor(result.id, uploadFile, downloadFile);
      setActor(backend);
      setError(null);
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      setError(`Failed to create backend actor using ${result.source}: ${msg}`);
      console.error("Failed to create backend actor:", e);
    } finally {
      setIsFetching(false);
    }
  }, []);

  return useMemo(
    () => ({ actor, isFetching, error }),
    [actor, isFetching, error],
  );
}
