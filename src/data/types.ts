import type { ReactElement } from "react";
import { DATA } from "./resume";

/**
 * Deeply widens the `as const` literal types of DATA (e.g. "Niko Pang" -> string)
 * while preserving component/element types, so a translated variant (DATA_ZH)
 * must keep the exact same shape without matching the English literals.
 */
type Widen<T> = T extends string
  ? string
  : T extends ReactElement
  ? ReactElement
  : // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends (...args: any[]) => any
  ? T
  : T extends readonly (infer U)[]
  ? readonly Widen<U>[]
  : T extends object
  ? { readonly [K in keyof T]: Widen<T[K]> }
  : T;

export type AppData = Widen<typeof DATA>;
