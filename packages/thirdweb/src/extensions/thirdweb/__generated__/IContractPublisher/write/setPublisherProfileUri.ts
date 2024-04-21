import type { AbiParameterToPrimitiveType } from "abitype";
import type {
  BaseTransactionOptions,
  WithOverrides,
} from "../../../../../transaction/types.js";
import { prepareContractCall } from "../../../../../transaction/prepare-contract-call.js";
import { encodeAbiParameters } from "../../../../../utils/abi/encodeAbiParameters.js";
import { once } from "../../../../../utils/promise/once.js";
import type { ThirdwebContract } from "../../../../../contract/contract.js";
import { detectMethod } from "../../../../../utils/bytecode/detectExtension.js";

/**
 * Represents the parameters for the "setPublisherProfileUri" function.
 */
export type SetPublisherProfileUriParams = WithOverrides<{
  publisher: AbiParameterToPrimitiveType<{
    type: "address";
    name: "publisher";
  }>;
  uri: AbiParameterToPrimitiveType<{ type: "string"; name: "uri" }>;
}>;

export const FN_SELECTOR = "0x6e578e54" as const;
const FN_INPUTS = [
  {
    type: "address",
    name: "publisher",
  },
  {
    type: "string",
    name: "uri",
  },
] as const;
const FN_OUTPUTS = [] as const;

/**
 * Checks if the `setPublisherProfileUri` method is supported by the given contract.
 * @param contract The ThirdwebContract.
 * @returns A promise that resolves to a boolean indicating if the `setPublisherProfileUri` method is supported.
 * @extension THIRDWEB
 * @example
 * ```ts
 * import { isSetPublisherProfileUriSupported } from "thirdweb/extensions/thirdweb";
 *
 * const supported = await isSetPublisherProfileUriSupported(contract);
 * ```
 */
export async function isSetPublisherProfileUriSupported(
  contract: ThirdwebContract<any>,
) {
  return detectMethod({
    contract,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS] as const,
  });
}

/**
 * Encodes the parameters for the "setPublisherProfileUri" function.
 * @param options - The options for the setPublisherProfileUri function.
 * @returns The encoded ABI parameters.
 * @extension THIRDWEB
 * @example
 * ```ts
 * import { encodeSetPublisherProfileUriParams } "thirdweb/extensions/thirdweb";
 * const result = encodeSetPublisherProfileUriParams({
 *  publisher: ...,
 *  uri: ...,
 * });
 * ```
 */
export function encodeSetPublisherProfileUriParams(
  options: SetPublisherProfileUriParams,
) {
  return encodeAbiParameters(FN_INPUTS, [options.publisher, options.uri]);
}

/**
 * Encodes the "setPublisherProfileUri" function into a Hex string with its parameters.
 * @param options - The options for the setPublisherProfileUri function.
 * @returns The encoded hexadecimal string.
 * @extension THIRDWEB
 * @example
 * ```ts
 * import { encodeSetPublisherProfileUri } "thirdweb/extensions/thirdweb";
 * const result = encodeSetPublisherProfileUri({
 *  publisher: ...,
 *  uri: ...,
 * });
 * ```
 */
export function encodeSetPublisherProfileUri(
  options: SetPublisherProfileUriParams,
) {
  // we do a "manual" concat here to avoid the overhead of the "concatHex" function
  // we can do this because we know the specific formats of the values
  return (FN_SELECTOR +
    encodeSetPublisherProfileUriParams(options).slice(
      2,
    )) as `${typeof FN_SELECTOR}${string}`;
}

/**
 * Calls the "setPublisherProfileUri" function on the contract.
 * @param options - The options for the "setPublisherProfileUri" function.
 * @returns A prepared transaction object.
 * @extension THIRDWEB
 * @example
 * ```ts
 * import { setPublisherProfileUri } from "thirdweb/extensions/thirdweb";
 *
 * const transaction = setPublisherProfileUri({
 *  contract,
 *  publisher: ...,
 *  uri: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function setPublisherProfileUri(
  options: BaseTransactionOptions<
    | SetPublisherProfileUriParams
    | {
        asyncParams: () => Promise<SetPublisherProfileUriParams>;
      }
  >,
) {
  const asyncOptions = once(async () => {
    return "asyncParams" in options ? await options.asyncParams() : options;
  });

  return prepareContractCall({
    contract: options.contract,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS] as const,
    params: async () => {
      const resolvedOptions = await asyncOptions();
      return [resolvedOptions.publisher, resolvedOptions.uri] as const;
    },
    value: async () => (await asyncOptions()).overrides?.value,
  });
}
