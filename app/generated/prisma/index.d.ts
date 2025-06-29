
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model formateur
 * 
 */
export type formateur = $Result.DefaultSelection<Prisma.$formateurPayload>
/**
 * Model administrateur
 * 
 */
export type administrateur = $Result.DefaultSelection<Prisma.$administrateurPayload>
/**
 * Model apprenant
 * 
 */
export type apprenant = $Result.DefaultSelection<Prisma.$apprenantPayload>
/**
 * Model suiviCours
 * 
 */
export type suiviCours = $Result.DefaultSelection<Prisma.$suiviCoursPayload>
/**
 * Model cours
 * 
 */
export type cours = $Result.DefaultSelection<Prisma.$coursPayload>
/**
 * Model chapitre
 * 
 */
export type chapitre = $Result.DefaultSelection<Prisma.$chapitrePayload>
/**
 * Model lecon
 * 
 */
export type lecon = $Result.DefaultSelection<Prisma.$leconPayload>
/**
 * Model veille
 * 
 */
export type veille = $Result.DefaultSelection<Prisma.$veillePayload>
/**
 * Model Soumission
 * 
 */
export type Soumission = $Result.DefaultSelection<Prisma.$SoumissionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Referentiel: {
  DEVELOPPEUR: 'DEVELOPPEUR',
  DIGITAL_CREATOR: 'DIGITAL_CREATOR',
  REFERENT_DIGITAL: 'REFERENT_DIGITAL'
};

export type Referentiel = (typeof Referentiel)[keyof typeof Referentiel]

}

export type Referentiel = $Enums.Referentiel

export const Referentiel: typeof $Enums.Referentiel

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Formateurs
 * const formateurs = await prisma.formateur.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Formateurs
   * const formateurs = await prisma.formateur.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.formateur`: Exposes CRUD operations for the **formateur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Formateurs
    * const formateurs = await prisma.formateur.findMany()
    * ```
    */
  get formateur(): Prisma.formateurDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.administrateur`: Exposes CRUD operations for the **administrateur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Administrateurs
    * const administrateurs = await prisma.administrateur.findMany()
    * ```
    */
  get administrateur(): Prisma.administrateurDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apprenant`: Exposes CRUD operations for the **apprenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Apprenants
    * const apprenants = await prisma.apprenant.findMany()
    * ```
    */
  get apprenant(): Prisma.apprenantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.suiviCours`: Exposes CRUD operations for the **suiviCours** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SuiviCours
    * const suiviCours = await prisma.suiviCours.findMany()
    * ```
    */
  get suiviCours(): Prisma.suiviCoursDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cours`: Exposes CRUD operations for the **cours** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cours
    * const cours = await prisma.cours.findMany()
    * ```
    */
  get cours(): Prisma.coursDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chapitre`: Exposes CRUD operations for the **chapitre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chapitres
    * const chapitres = await prisma.chapitre.findMany()
    * ```
    */
  get chapitre(): Prisma.chapitreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lecon`: Exposes CRUD operations for the **lecon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lecons
    * const lecons = await prisma.lecon.findMany()
    * ```
    */
  get lecon(): Prisma.leconDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.veille`: Exposes CRUD operations for the **veille** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Veilles
    * const veilles = await prisma.veille.findMany()
    * ```
    */
  get veille(): Prisma.veilleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.soumission`: Exposes CRUD operations for the **Soumission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Soumissions
    * const soumissions = await prisma.soumission.findMany()
    * ```
    */
  get soumission(): Prisma.SoumissionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    formateur: 'formateur',
    administrateur: 'administrateur',
    apprenant: 'apprenant',
    suiviCours: 'suiviCours',
    cours: 'cours',
    chapitre: 'chapitre',
    lecon: 'lecon',
    veille: 'veille',
    Soumission: 'Soumission'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "formateur" | "administrateur" | "apprenant" | "suiviCours" | "cours" | "chapitre" | "lecon" | "veille" | "soumission"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      formateur: {
        payload: Prisma.$formateurPayload<ExtArgs>
        fields: Prisma.formateurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.formateurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formateurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.formateurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formateurPayload>
          }
          findFirst: {
            args: Prisma.formateurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formateurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.formateurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formateurPayload>
          }
          findMany: {
            args: Prisma.formateurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formateurPayload>[]
          }
          create: {
            args: Prisma.formateurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formateurPayload>
          }
          createMany: {
            args: Prisma.formateurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.formateurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formateurPayload>[]
          }
          delete: {
            args: Prisma.formateurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formateurPayload>
          }
          update: {
            args: Prisma.formateurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formateurPayload>
          }
          deleteMany: {
            args: Prisma.formateurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.formateurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.formateurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formateurPayload>[]
          }
          upsert: {
            args: Prisma.formateurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formateurPayload>
          }
          aggregate: {
            args: Prisma.FormateurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormateur>
          }
          groupBy: {
            args: Prisma.formateurGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormateurGroupByOutputType>[]
          }
          count: {
            args: Prisma.formateurCountArgs<ExtArgs>
            result: $Utils.Optional<FormateurCountAggregateOutputType> | number
          }
        }
      }
      administrateur: {
        payload: Prisma.$administrateurPayload<ExtArgs>
        fields: Prisma.administrateurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.administrateurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administrateurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.administrateurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administrateurPayload>
          }
          findFirst: {
            args: Prisma.administrateurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administrateurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.administrateurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administrateurPayload>
          }
          findMany: {
            args: Prisma.administrateurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administrateurPayload>[]
          }
          create: {
            args: Prisma.administrateurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administrateurPayload>
          }
          createMany: {
            args: Prisma.administrateurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.administrateurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administrateurPayload>[]
          }
          delete: {
            args: Prisma.administrateurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administrateurPayload>
          }
          update: {
            args: Prisma.administrateurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administrateurPayload>
          }
          deleteMany: {
            args: Prisma.administrateurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.administrateurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.administrateurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administrateurPayload>[]
          }
          upsert: {
            args: Prisma.administrateurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administrateurPayload>
          }
          aggregate: {
            args: Prisma.AdministrateurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdministrateur>
          }
          groupBy: {
            args: Prisma.administrateurGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdministrateurGroupByOutputType>[]
          }
          count: {
            args: Prisma.administrateurCountArgs<ExtArgs>
            result: $Utils.Optional<AdministrateurCountAggregateOutputType> | number
          }
        }
      }
      apprenant: {
        payload: Prisma.$apprenantPayload<ExtArgs>
        fields: Prisma.apprenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.apprenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apprenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.apprenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apprenantPayload>
          }
          findFirst: {
            args: Prisma.apprenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apprenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.apprenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apprenantPayload>
          }
          findMany: {
            args: Prisma.apprenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apprenantPayload>[]
          }
          create: {
            args: Prisma.apprenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apprenantPayload>
          }
          createMany: {
            args: Prisma.apprenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.apprenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apprenantPayload>[]
          }
          delete: {
            args: Prisma.apprenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apprenantPayload>
          }
          update: {
            args: Prisma.apprenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apprenantPayload>
          }
          deleteMany: {
            args: Prisma.apprenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.apprenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.apprenantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apprenantPayload>[]
          }
          upsert: {
            args: Prisma.apprenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apprenantPayload>
          }
          aggregate: {
            args: Prisma.ApprenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApprenant>
          }
          groupBy: {
            args: Prisma.apprenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApprenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.apprenantCountArgs<ExtArgs>
            result: $Utils.Optional<ApprenantCountAggregateOutputType> | number
          }
        }
      }
      suiviCours: {
        payload: Prisma.$suiviCoursPayload<ExtArgs>
        fields: Prisma.suiviCoursFieldRefs
        operations: {
          findUnique: {
            args: Prisma.suiviCoursFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suiviCoursPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.suiviCoursFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suiviCoursPayload>
          }
          findFirst: {
            args: Prisma.suiviCoursFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suiviCoursPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.suiviCoursFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suiviCoursPayload>
          }
          findMany: {
            args: Prisma.suiviCoursFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suiviCoursPayload>[]
          }
          create: {
            args: Prisma.suiviCoursCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suiviCoursPayload>
          }
          createMany: {
            args: Prisma.suiviCoursCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.suiviCoursCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suiviCoursPayload>[]
          }
          delete: {
            args: Prisma.suiviCoursDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suiviCoursPayload>
          }
          update: {
            args: Prisma.suiviCoursUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suiviCoursPayload>
          }
          deleteMany: {
            args: Prisma.suiviCoursDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.suiviCoursUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.suiviCoursUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suiviCoursPayload>[]
          }
          upsert: {
            args: Prisma.suiviCoursUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suiviCoursPayload>
          }
          aggregate: {
            args: Prisma.SuiviCoursAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuiviCours>
          }
          groupBy: {
            args: Prisma.suiviCoursGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuiviCoursGroupByOutputType>[]
          }
          count: {
            args: Prisma.suiviCoursCountArgs<ExtArgs>
            result: $Utils.Optional<SuiviCoursCountAggregateOutputType> | number
          }
        }
      }
      cours: {
        payload: Prisma.$coursPayload<ExtArgs>
        fields: Prisma.coursFieldRefs
        operations: {
          findUnique: {
            args: Prisma.coursFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.coursFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursPayload>
          }
          findFirst: {
            args: Prisma.coursFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.coursFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursPayload>
          }
          findMany: {
            args: Prisma.coursFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursPayload>[]
          }
          create: {
            args: Prisma.coursCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursPayload>
          }
          createMany: {
            args: Prisma.coursCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.coursCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursPayload>[]
          }
          delete: {
            args: Prisma.coursDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursPayload>
          }
          update: {
            args: Prisma.coursUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursPayload>
          }
          deleteMany: {
            args: Prisma.coursDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.coursUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.coursUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursPayload>[]
          }
          upsert: {
            args: Prisma.coursUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursPayload>
          }
          aggregate: {
            args: Prisma.CoursAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCours>
          }
          groupBy: {
            args: Prisma.coursGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoursGroupByOutputType>[]
          }
          count: {
            args: Prisma.coursCountArgs<ExtArgs>
            result: $Utils.Optional<CoursCountAggregateOutputType> | number
          }
        }
      }
      chapitre: {
        payload: Prisma.$chapitrePayload<ExtArgs>
        fields: Prisma.chapitreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chapitreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapitrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chapitreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapitrePayload>
          }
          findFirst: {
            args: Prisma.chapitreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapitrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chapitreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapitrePayload>
          }
          findMany: {
            args: Prisma.chapitreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapitrePayload>[]
          }
          create: {
            args: Prisma.chapitreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapitrePayload>
          }
          createMany: {
            args: Prisma.chapitreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.chapitreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapitrePayload>[]
          }
          delete: {
            args: Prisma.chapitreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapitrePayload>
          }
          update: {
            args: Prisma.chapitreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapitrePayload>
          }
          deleteMany: {
            args: Prisma.chapitreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chapitreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.chapitreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapitrePayload>[]
          }
          upsert: {
            args: Prisma.chapitreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapitrePayload>
          }
          aggregate: {
            args: Prisma.ChapitreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChapitre>
          }
          groupBy: {
            args: Prisma.chapitreGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChapitreGroupByOutputType>[]
          }
          count: {
            args: Prisma.chapitreCountArgs<ExtArgs>
            result: $Utils.Optional<ChapitreCountAggregateOutputType> | number
          }
        }
      }
      lecon: {
        payload: Prisma.$leconPayload<ExtArgs>
        fields: Prisma.leconFieldRefs
        operations: {
          findUnique: {
            args: Prisma.leconFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leconPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.leconFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leconPayload>
          }
          findFirst: {
            args: Prisma.leconFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leconPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.leconFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leconPayload>
          }
          findMany: {
            args: Prisma.leconFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leconPayload>[]
          }
          create: {
            args: Prisma.leconCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leconPayload>
          }
          createMany: {
            args: Prisma.leconCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.leconCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leconPayload>[]
          }
          delete: {
            args: Prisma.leconDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leconPayload>
          }
          update: {
            args: Prisma.leconUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leconPayload>
          }
          deleteMany: {
            args: Prisma.leconDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.leconUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.leconUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leconPayload>[]
          }
          upsert: {
            args: Prisma.leconUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leconPayload>
          }
          aggregate: {
            args: Prisma.LeconAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLecon>
          }
          groupBy: {
            args: Prisma.leconGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeconGroupByOutputType>[]
          }
          count: {
            args: Prisma.leconCountArgs<ExtArgs>
            result: $Utils.Optional<LeconCountAggregateOutputType> | number
          }
        }
      }
      veille: {
        payload: Prisma.$veillePayload<ExtArgs>
        fields: Prisma.veilleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.veilleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veillePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.veilleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veillePayload>
          }
          findFirst: {
            args: Prisma.veilleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veillePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.veilleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veillePayload>
          }
          findMany: {
            args: Prisma.veilleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veillePayload>[]
          }
          create: {
            args: Prisma.veilleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veillePayload>
          }
          createMany: {
            args: Prisma.veilleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.veilleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veillePayload>[]
          }
          delete: {
            args: Prisma.veilleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veillePayload>
          }
          update: {
            args: Prisma.veilleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veillePayload>
          }
          deleteMany: {
            args: Prisma.veilleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.veilleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.veilleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veillePayload>[]
          }
          upsert: {
            args: Prisma.veilleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veillePayload>
          }
          aggregate: {
            args: Prisma.VeilleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVeille>
          }
          groupBy: {
            args: Prisma.veilleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VeilleGroupByOutputType>[]
          }
          count: {
            args: Prisma.veilleCountArgs<ExtArgs>
            result: $Utils.Optional<VeilleCountAggregateOutputType> | number
          }
        }
      }
      Soumission: {
        payload: Prisma.$SoumissionPayload<ExtArgs>
        fields: Prisma.SoumissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SoumissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoumissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SoumissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoumissionPayload>
          }
          findFirst: {
            args: Prisma.SoumissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoumissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SoumissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoumissionPayload>
          }
          findMany: {
            args: Prisma.SoumissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoumissionPayload>[]
          }
          create: {
            args: Prisma.SoumissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoumissionPayload>
          }
          createMany: {
            args: Prisma.SoumissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SoumissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoumissionPayload>[]
          }
          delete: {
            args: Prisma.SoumissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoumissionPayload>
          }
          update: {
            args: Prisma.SoumissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoumissionPayload>
          }
          deleteMany: {
            args: Prisma.SoumissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SoumissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SoumissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoumissionPayload>[]
          }
          upsert: {
            args: Prisma.SoumissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoumissionPayload>
          }
          aggregate: {
            args: Prisma.SoumissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSoumission>
          }
          groupBy: {
            args: Prisma.SoumissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SoumissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SoumissionCountArgs<ExtArgs>
            result: $Utils.Optional<SoumissionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    formateur?: formateurOmit
    administrateur?: administrateurOmit
    apprenant?: apprenantOmit
    suiviCours?: suiviCoursOmit
    cours?: coursOmit
    chapitre?: chapitreOmit
    lecon?: leconOmit
    veille?: veilleOmit
    soumission?: SoumissionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type FormateurCountOutputType
   */

  export type FormateurCountOutputType = {
    cours: number
    veille: number
  }

  export type FormateurCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cours?: boolean | FormateurCountOutputTypeCountCoursArgs
    veille?: boolean | FormateurCountOutputTypeCountVeilleArgs
  }

  // Custom InputTypes
  /**
   * FormateurCountOutputType without action
   */
  export type FormateurCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormateurCountOutputType
     */
    select?: FormateurCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormateurCountOutputType without action
   */
  export type FormateurCountOutputTypeCountCoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: coursWhereInput
  }

  /**
   * FormateurCountOutputType without action
   */
  export type FormateurCountOutputTypeCountVeilleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: veilleWhereInput
  }


  /**
   * Count Type ApprenantCountOutputType
   */

  export type ApprenantCountOutputType = {
    veille: number
    suiviCours: number
    Soumission: number
  }

  export type ApprenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    veille?: boolean | ApprenantCountOutputTypeCountVeilleArgs
    suiviCours?: boolean | ApprenantCountOutputTypeCountSuiviCoursArgs
    Soumission?: boolean | ApprenantCountOutputTypeCountSoumissionArgs
  }

  // Custom InputTypes
  /**
   * ApprenantCountOutputType without action
   */
  export type ApprenantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprenantCountOutputType
     */
    select?: ApprenantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApprenantCountOutputType without action
   */
  export type ApprenantCountOutputTypeCountVeilleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: veilleWhereInput
  }

  /**
   * ApprenantCountOutputType without action
   */
  export type ApprenantCountOutputTypeCountSuiviCoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: suiviCoursWhereInput
  }

  /**
   * ApprenantCountOutputType without action
   */
  export type ApprenantCountOutputTypeCountSoumissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SoumissionWhereInput
  }


  /**
   * Count Type CoursCountOutputType
   */

  export type CoursCountOutputType = {
    suiviCours: number
    chapitre: number
  }

  export type CoursCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suiviCours?: boolean | CoursCountOutputTypeCountSuiviCoursArgs
    chapitre?: boolean | CoursCountOutputTypeCountChapitreArgs
  }

  // Custom InputTypes
  /**
   * CoursCountOutputType without action
   */
  export type CoursCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursCountOutputType
     */
    select?: CoursCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CoursCountOutputType without action
   */
  export type CoursCountOutputTypeCountSuiviCoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: suiviCoursWhereInput
  }

  /**
   * CoursCountOutputType without action
   */
  export type CoursCountOutputTypeCountChapitreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chapitreWhereInput
  }


  /**
   * Count Type ChapitreCountOutputType
   */

  export type ChapitreCountOutputType = {
    lecon: number
  }

  export type ChapitreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecon?: boolean | ChapitreCountOutputTypeCountLeconArgs
  }

  // Custom InputTypes
  /**
   * ChapitreCountOutputType without action
   */
  export type ChapitreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapitreCountOutputType
     */
    select?: ChapitreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChapitreCountOutputType without action
   */
  export type ChapitreCountOutputTypeCountLeconArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leconWhereInput
  }


  /**
   * Count Type VeilleCountOutputType
   */

  export type VeilleCountOutputType = {
    Soumission: number
  }

  export type VeilleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Soumission?: boolean | VeilleCountOutputTypeCountSoumissionArgs
  }

  // Custom InputTypes
  /**
   * VeilleCountOutputType without action
   */
  export type VeilleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeilleCountOutputType
     */
    select?: VeilleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VeilleCountOutputType without action
   */
  export type VeilleCountOutputTypeCountSoumissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SoumissionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model formateur
   */

  export type AggregateFormateur = {
    _count: FormateurCountAggregateOutputType | null
    _avg: FormateurAvgAggregateOutputType | null
    _sum: FormateurSumAggregateOutputType | null
    _min: FormateurMinAggregateOutputType | null
    _max: FormateurMaxAggregateOutputType | null
  }

  export type FormateurAvgAggregateOutputType = {
    id_formateur: number | null
  }

  export type FormateurSumAggregateOutputType = {
    id_formateur: number | null
  }

  export type FormateurMinAggregateOutputType = {
    id_formateur: number | null
    nom: string | null
    prenom: string | null
    email: string | null
    password: string | null
    referentiel: $Enums.Referentiel | null
  }

  export type FormateurMaxAggregateOutputType = {
    id_formateur: number | null
    nom: string | null
    prenom: string | null
    email: string | null
    password: string | null
    referentiel: $Enums.Referentiel | null
  }

  export type FormateurCountAggregateOutputType = {
    id_formateur: number
    nom: number
    prenom: number
    email: number
    password: number
    referentiel: number
    _all: number
  }


  export type FormateurAvgAggregateInputType = {
    id_formateur?: true
  }

  export type FormateurSumAggregateInputType = {
    id_formateur?: true
  }

  export type FormateurMinAggregateInputType = {
    id_formateur?: true
    nom?: true
    prenom?: true
    email?: true
    password?: true
    referentiel?: true
  }

  export type FormateurMaxAggregateInputType = {
    id_formateur?: true
    nom?: true
    prenom?: true
    email?: true
    password?: true
    referentiel?: true
  }

  export type FormateurCountAggregateInputType = {
    id_formateur?: true
    nom?: true
    prenom?: true
    email?: true
    password?: true
    referentiel?: true
    _all?: true
  }

  export type FormateurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formateur to aggregate.
     */
    where?: formateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formateurs to fetch.
     */
    orderBy?: formateurOrderByWithRelationInput | formateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: formateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned formateurs
    **/
    _count?: true | FormateurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormateurAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormateurSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormateurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormateurMaxAggregateInputType
  }

  export type GetFormateurAggregateType<T extends FormateurAggregateArgs> = {
        [P in keyof T & keyof AggregateFormateur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormateur[P]>
      : GetScalarType<T[P], AggregateFormateur[P]>
  }




  export type formateurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: formateurWhereInput
    orderBy?: formateurOrderByWithAggregationInput | formateurOrderByWithAggregationInput[]
    by: FormateurScalarFieldEnum[] | FormateurScalarFieldEnum
    having?: formateurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormateurCountAggregateInputType | true
    _avg?: FormateurAvgAggregateInputType
    _sum?: FormateurSumAggregateInputType
    _min?: FormateurMinAggregateInputType
    _max?: FormateurMaxAggregateInputType
  }

  export type FormateurGroupByOutputType = {
    id_formateur: number
    nom: string
    prenom: string
    email: string
    password: string
    referentiel: $Enums.Referentiel
    _count: FormateurCountAggregateOutputType | null
    _avg: FormateurAvgAggregateOutputType | null
    _sum: FormateurSumAggregateOutputType | null
    _min: FormateurMinAggregateOutputType | null
    _max: FormateurMaxAggregateOutputType | null
  }

  type GetFormateurGroupByPayload<T extends formateurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormateurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormateurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormateurGroupByOutputType[P]>
            : GetScalarType<T[P], FormateurGroupByOutputType[P]>
        }
      >
    >


  export type formateurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_formateur?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    password?: boolean
    referentiel?: boolean
    cours?: boolean | formateur$coursArgs<ExtArgs>
    veille?: boolean | formateur$veilleArgs<ExtArgs>
    _count?: boolean | FormateurCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formateur"]>

  export type formateurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_formateur?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    password?: boolean
    referentiel?: boolean
  }, ExtArgs["result"]["formateur"]>

  export type formateurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_formateur?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    password?: boolean
    referentiel?: boolean
  }, ExtArgs["result"]["formateur"]>

  export type formateurSelectScalar = {
    id_formateur?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    password?: boolean
    referentiel?: boolean
  }

  export type formateurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_formateur" | "nom" | "prenom" | "email" | "password" | "referentiel", ExtArgs["result"]["formateur"]>
  export type formateurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cours?: boolean | formateur$coursArgs<ExtArgs>
    veille?: boolean | formateur$veilleArgs<ExtArgs>
    _count?: boolean | FormateurCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type formateurIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type formateurIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $formateurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "formateur"
    objects: {
      cours: Prisma.$coursPayload<ExtArgs>[]
      veille: Prisma.$veillePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_formateur: number
      nom: string
      prenom: string
      email: string
      password: string
      referentiel: $Enums.Referentiel
    }, ExtArgs["result"]["formateur"]>
    composites: {}
  }

  type formateurGetPayload<S extends boolean | null | undefined | formateurDefaultArgs> = $Result.GetResult<Prisma.$formateurPayload, S>

  type formateurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<formateurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormateurCountAggregateInputType | true
    }

  export interface formateurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['formateur'], meta: { name: 'formateur' } }
    /**
     * Find zero or one Formateur that matches the filter.
     * @param {formateurFindUniqueArgs} args - Arguments to find a Formateur
     * @example
     * // Get one Formateur
     * const formateur = await prisma.formateur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends formateurFindUniqueArgs>(args: SelectSubset<T, formateurFindUniqueArgs<ExtArgs>>): Prisma__formateurClient<$Result.GetResult<Prisma.$formateurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Formateur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {formateurFindUniqueOrThrowArgs} args - Arguments to find a Formateur
     * @example
     * // Get one Formateur
     * const formateur = await prisma.formateur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends formateurFindUniqueOrThrowArgs>(args: SelectSubset<T, formateurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__formateurClient<$Result.GetResult<Prisma.$formateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formateur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formateurFindFirstArgs} args - Arguments to find a Formateur
     * @example
     * // Get one Formateur
     * const formateur = await prisma.formateur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends formateurFindFirstArgs>(args?: SelectSubset<T, formateurFindFirstArgs<ExtArgs>>): Prisma__formateurClient<$Result.GetResult<Prisma.$formateurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formateur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formateurFindFirstOrThrowArgs} args - Arguments to find a Formateur
     * @example
     * // Get one Formateur
     * const formateur = await prisma.formateur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends formateurFindFirstOrThrowArgs>(args?: SelectSubset<T, formateurFindFirstOrThrowArgs<ExtArgs>>): Prisma__formateurClient<$Result.GetResult<Prisma.$formateurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Formateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formateurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Formateurs
     * const formateurs = await prisma.formateur.findMany()
     * 
     * // Get first 10 Formateurs
     * const formateurs = await prisma.formateur.findMany({ take: 10 })
     * 
     * // Only select the `id_formateur`
     * const formateurWithId_formateurOnly = await prisma.formateur.findMany({ select: { id_formateur: true } })
     * 
     */
    findMany<T extends formateurFindManyArgs>(args?: SelectSubset<T, formateurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Formateur.
     * @param {formateurCreateArgs} args - Arguments to create a Formateur.
     * @example
     * // Create one Formateur
     * const Formateur = await prisma.formateur.create({
     *   data: {
     *     // ... data to create a Formateur
     *   }
     * })
     * 
     */
    create<T extends formateurCreateArgs>(args: SelectSubset<T, formateurCreateArgs<ExtArgs>>): Prisma__formateurClient<$Result.GetResult<Prisma.$formateurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Formateurs.
     * @param {formateurCreateManyArgs} args - Arguments to create many Formateurs.
     * @example
     * // Create many Formateurs
     * const formateur = await prisma.formateur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends formateurCreateManyArgs>(args?: SelectSubset<T, formateurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Formateurs and returns the data saved in the database.
     * @param {formateurCreateManyAndReturnArgs} args - Arguments to create many Formateurs.
     * @example
     * // Create many Formateurs
     * const formateur = await prisma.formateur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Formateurs and only return the `id_formateur`
     * const formateurWithId_formateurOnly = await prisma.formateur.createManyAndReturn({
     *   select: { id_formateur: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends formateurCreateManyAndReturnArgs>(args?: SelectSubset<T, formateurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formateurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Formateur.
     * @param {formateurDeleteArgs} args - Arguments to delete one Formateur.
     * @example
     * // Delete one Formateur
     * const Formateur = await prisma.formateur.delete({
     *   where: {
     *     // ... filter to delete one Formateur
     *   }
     * })
     * 
     */
    delete<T extends formateurDeleteArgs>(args: SelectSubset<T, formateurDeleteArgs<ExtArgs>>): Prisma__formateurClient<$Result.GetResult<Prisma.$formateurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Formateur.
     * @param {formateurUpdateArgs} args - Arguments to update one Formateur.
     * @example
     * // Update one Formateur
     * const formateur = await prisma.formateur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends formateurUpdateArgs>(args: SelectSubset<T, formateurUpdateArgs<ExtArgs>>): Prisma__formateurClient<$Result.GetResult<Prisma.$formateurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Formateurs.
     * @param {formateurDeleteManyArgs} args - Arguments to filter Formateurs to delete.
     * @example
     * // Delete a few Formateurs
     * const { count } = await prisma.formateur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends formateurDeleteManyArgs>(args?: SelectSubset<T, formateurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formateurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Formateurs
     * const formateur = await prisma.formateur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends formateurUpdateManyArgs>(args: SelectSubset<T, formateurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formateurs and returns the data updated in the database.
     * @param {formateurUpdateManyAndReturnArgs} args - Arguments to update many Formateurs.
     * @example
     * // Update many Formateurs
     * const formateur = await prisma.formateur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Formateurs and only return the `id_formateur`
     * const formateurWithId_formateurOnly = await prisma.formateur.updateManyAndReturn({
     *   select: { id_formateur: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends formateurUpdateManyAndReturnArgs>(args: SelectSubset<T, formateurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formateurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Formateur.
     * @param {formateurUpsertArgs} args - Arguments to update or create a Formateur.
     * @example
     * // Update or create a Formateur
     * const formateur = await prisma.formateur.upsert({
     *   create: {
     *     // ... data to create a Formateur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Formateur we want to update
     *   }
     * })
     */
    upsert<T extends formateurUpsertArgs>(args: SelectSubset<T, formateurUpsertArgs<ExtArgs>>): Prisma__formateurClient<$Result.GetResult<Prisma.$formateurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Formateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formateurCountArgs} args - Arguments to filter Formateurs to count.
     * @example
     * // Count the number of Formateurs
     * const count = await prisma.formateur.count({
     *   where: {
     *     // ... the filter for the Formateurs we want to count
     *   }
     * })
    **/
    count<T extends formateurCountArgs>(
      args?: Subset<T, formateurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormateurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Formateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormateurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormateurAggregateArgs>(args: Subset<T, FormateurAggregateArgs>): Prisma.PrismaPromise<GetFormateurAggregateType<T>>

    /**
     * Group by Formateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formateurGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends formateurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: formateurGroupByArgs['orderBy'] }
        : { orderBy?: formateurGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, formateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the formateur model
   */
  readonly fields: formateurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for formateur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__formateurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cours<T extends formateur$coursArgs<ExtArgs> = {}>(args?: Subset<T, formateur$coursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    veille<T extends formateur$veilleArgs<ExtArgs> = {}>(args?: Subset<T, formateur$veilleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$veillePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the formateur model
   */
  interface formateurFieldRefs {
    readonly id_formateur: FieldRef<"formateur", 'Int'>
    readonly nom: FieldRef<"formateur", 'String'>
    readonly prenom: FieldRef<"formateur", 'String'>
    readonly email: FieldRef<"formateur", 'String'>
    readonly password: FieldRef<"formateur", 'String'>
    readonly referentiel: FieldRef<"formateur", 'Referentiel'>
  }
    

  // Custom InputTypes
  /**
   * formateur findUnique
   */
  export type formateurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formateur
     */
    select?: formateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formateur
     */
    omit?: formateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formateurInclude<ExtArgs> | null
    /**
     * Filter, which formateur to fetch.
     */
    where: formateurWhereUniqueInput
  }

  /**
   * formateur findUniqueOrThrow
   */
  export type formateurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formateur
     */
    select?: formateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formateur
     */
    omit?: formateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formateurInclude<ExtArgs> | null
    /**
     * Filter, which formateur to fetch.
     */
    where: formateurWhereUniqueInput
  }

  /**
   * formateur findFirst
   */
  export type formateurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formateur
     */
    select?: formateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formateur
     */
    omit?: formateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formateurInclude<ExtArgs> | null
    /**
     * Filter, which formateur to fetch.
     */
    where?: formateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formateurs to fetch.
     */
    orderBy?: formateurOrderByWithRelationInput | formateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formateurs.
     */
    cursor?: formateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formateurs.
     */
    distinct?: FormateurScalarFieldEnum | FormateurScalarFieldEnum[]
  }

  /**
   * formateur findFirstOrThrow
   */
  export type formateurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formateur
     */
    select?: formateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formateur
     */
    omit?: formateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formateurInclude<ExtArgs> | null
    /**
     * Filter, which formateur to fetch.
     */
    where?: formateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formateurs to fetch.
     */
    orderBy?: formateurOrderByWithRelationInput | formateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formateurs.
     */
    cursor?: formateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formateurs.
     */
    distinct?: FormateurScalarFieldEnum | FormateurScalarFieldEnum[]
  }

  /**
   * formateur findMany
   */
  export type formateurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formateur
     */
    select?: formateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formateur
     */
    omit?: formateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formateurInclude<ExtArgs> | null
    /**
     * Filter, which formateurs to fetch.
     */
    where?: formateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formateurs to fetch.
     */
    orderBy?: formateurOrderByWithRelationInput | formateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing formateurs.
     */
    cursor?: formateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formateurs.
     */
    skip?: number
    distinct?: FormateurScalarFieldEnum | FormateurScalarFieldEnum[]
  }

  /**
   * formateur create
   */
  export type formateurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formateur
     */
    select?: formateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formateur
     */
    omit?: formateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formateurInclude<ExtArgs> | null
    /**
     * The data needed to create a formateur.
     */
    data: XOR<formateurCreateInput, formateurUncheckedCreateInput>
  }

  /**
   * formateur createMany
   */
  export type formateurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many formateurs.
     */
    data: formateurCreateManyInput | formateurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * formateur createManyAndReturn
   */
  export type formateurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formateur
     */
    select?: formateurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the formateur
     */
    omit?: formateurOmit<ExtArgs> | null
    /**
     * The data used to create many formateurs.
     */
    data: formateurCreateManyInput | formateurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * formateur update
   */
  export type formateurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formateur
     */
    select?: formateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formateur
     */
    omit?: formateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formateurInclude<ExtArgs> | null
    /**
     * The data needed to update a formateur.
     */
    data: XOR<formateurUpdateInput, formateurUncheckedUpdateInput>
    /**
     * Choose, which formateur to update.
     */
    where: formateurWhereUniqueInput
  }

  /**
   * formateur updateMany
   */
  export type formateurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update formateurs.
     */
    data: XOR<formateurUpdateManyMutationInput, formateurUncheckedUpdateManyInput>
    /**
     * Filter which formateurs to update
     */
    where?: formateurWhereInput
    /**
     * Limit how many formateurs to update.
     */
    limit?: number
  }

  /**
   * formateur updateManyAndReturn
   */
  export type formateurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formateur
     */
    select?: formateurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the formateur
     */
    omit?: formateurOmit<ExtArgs> | null
    /**
     * The data used to update formateurs.
     */
    data: XOR<formateurUpdateManyMutationInput, formateurUncheckedUpdateManyInput>
    /**
     * Filter which formateurs to update
     */
    where?: formateurWhereInput
    /**
     * Limit how many formateurs to update.
     */
    limit?: number
  }

  /**
   * formateur upsert
   */
  export type formateurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formateur
     */
    select?: formateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formateur
     */
    omit?: formateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formateurInclude<ExtArgs> | null
    /**
     * The filter to search for the formateur to update in case it exists.
     */
    where: formateurWhereUniqueInput
    /**
     * In case the formateur found by the `where` argument doesn't exist, create a new formateur with this data.
     */
    create: XOR<formateurCreateInput, formateurUncheckedCreateInput>
    /**
     * In case the formateur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<formateurUpdateInput, formateurUncheckedUpdateInput>
  }

  /**
   * formateur delete
   */
  export type formateurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formateur
     */
    select?: formateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formateur
     */
    omit?: formateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formateurInclude<ExtArgs> | null
    /**
     * Filter which formateur to delete.
     */
    where: formateurWhereUniqueInput
  }

  /**
   * formateur deleteMany
   */
  export type formateurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formateurs to delete
     */
    where?: formateurWhereInput
    /**
     * Limit how many formateurs to delete.
     */
    limit?: number
  }

  /**
   * formateur.cours
   */
  export type formateur$coursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cours
     */
    select?: coursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cours
     */
    omit?: coursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursInclude<ExtArgs> | null
    where?: coursWhereInput
    orderBy?: coursOrderByWithRelationInput | coursOrderByWithRelationInput[]
    cursor?: coursWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoursScalarFieldEnum | CoursScalarFieldEnum[]
  }

  /**
   * formateur.veille
   */
  export type formateur$veilleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veille
     */
    select?: veilleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veille
     */
    omit?: veilleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veilleInclude<ExtArgs> | null
    where?: veilleWhereInput
    orderBy?: veilleOrderByWithRelationInput | veilleOrderByWithRelationInput[]
    cursor?: veilleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VeilleScalarFieldEnum | VeilleScalarFieldEnum[]
  }

  /**
   * formateur without action
   */
  export type formateurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formateur
     */
    select?: formateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formateur
     */
    omit?: formateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formateurInclude<ExtArgs> | null
  }


  /**
   * Model administrateur
   */

  export type AggregateAdministrateur = {
    _count: AdministrateurCountAggregateOutputType | null
    _avg: AdministrateurAvgAggregateOutputType | null
    _sum: AdministrateurSumAggregateOutputType | null
    _min: AdministrateurMinAggregateOutputType | null
    _max: AdministrateurMaxAggregateOutputType | null
  }

  export type AdministrateurAvgAggregateOutputType = {
    id_administrateur: number | null
  }

  export type AdministrateurSumAggregateOutputType = {
    id_administrateur: number | null
  }

  export type AdministrateurMinAggregateOutputType = {
    id_administrateur: number | null
    nom: string | null
    prenom: string | null
    email: string | null
    password: string | null
  }

  export type AdministrateurMaxAggregateOutputType = {
    id_administrateur: number | null
    nom: string | null
    prenom: string | null
    email: string | null
    password: string | null
  }

  export type AdministrateurCountAggregateOutputType = {
    id_administrateur: number
    nom: number
    prenom: number
    email: number
    password: number
    _all: number
  }


  export type AdministrateurAvgAggregateInputType = {
    id_administrateur?: true
  }

  export type AdministrateurSumAggregateInputType = {
    id_administrateur?: true
  }

  export type AdministrateurMinAggregateInputType = {
    id_administrateur?: true
    nom?: true
    prenom?: true
    email?: true
    password?: true
  }

  export type AdministrateurMaxAggregateInputType = {
    id_administrateur?: true
    nom?: true
    prenom?: true
    email?: true
    password?: true
  }

  export type AdministrateurCountAggregateInputType = {
    id_administrateur?: true
    nom?: true
    prenom?: true
    email?: true
    password?: true
    _all?: true
  }

  export type AdministrateurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which administrateur to aggregate.
     */
    where?: administrateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of administrateurs to fetch.
     */
    orderBy?: administrateurOrderByWithRelationInput | administrateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: administrateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` administrateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` administrateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned administrateurs
    **/
    _count?: true | AdministrateurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdministrateurAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdministrateurSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdministrateurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdministrateurMaxAggregateInputType
  }

  export type GetAdministrateurAggregateType<T extends AdministrateurAggregateArgs> = {
        [P in keyof T & keyof AggregateAdministrateur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdministrateur[P]>
      : GetScalarType<T[P], AggregateAdministrateur[P]>
  }




  export type administrateurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: administrateurWhereInput
    orderBy?: administrateurOrderByWithAggregationInput | administrateurOrderByWithAggregationInput[]
    by: AdministrateurScalarFieldEnum[] | AdministrateurScalarFieldEnum
    having?: administrateurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdministrateurCountAggregateInputType | true
    _avg?: AdministrateurAvgAggregateInputType
    _sum?: AdministrateurSumAggregateInputType
    _min?: AdministrateurMinAggregateInputType
    _max?: AdministrateurMaxAggregateInputType
  }

  export type AdministrateurGroupByOutputType = {
    id_administrateur: number
    nom: string
    prenom: string
    email: string
    password: string
    _count: AdministrateurCountAggregateOutputType | null
    _avg: AdministrateurAvgAggregateOutputType | null
    _sum: AdministrateurSumAggregateOutputType | null
    _min: AdministrateurMinAggregateOutputType | null
    _max: AdministrateurMaxAggregateOutputType | null
  }

  type GetAdministrateurGroupByPayload<T extends administrateurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdministrateurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdministrateurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdministrateurGroupByOutputType[P]>
            : GetScalarType<T[P], AdministrateurGroupByOutputType[P]>
        }
      >
    >


  export type administrateurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_administrateur?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["administrateur"]>

  export type administrateurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_administrateur?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["administrateur"]>

  export type administrateurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_administrateur?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["administrateur"]>

  export type administrateurSelectScalar = {
    id_administrateur?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    password?: boolean
  }

  export type administrateurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_administrateur" | "nom" | "prenom" | "email" | "password", ExtArgs["result"]["administrateur"]>

  export type $administrateurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "administrateur"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_administrateur: number
      nom: string
      prenom: string
      email: string
      password: string
    }, ExtArgs["result"]["administrateur"]>
    composites: {}
  }

  type administrateurGetPayload<S extends boolean | null | undefined | administrateurDefaultArgs> = $Result.GetResult<Prisma.$administrateurPayload, S>

  type administrateurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<administrateurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdministrateurCountAggregateInputType | true
    }

  export interface administrateurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['administrateur'], meta: { name: 'administrateur' } }
    /**
     * Find zero or one Administrateur that matches the filter.
     * @param {administrateurFindUniqueArgs} args - Arguments to find a Administrateur
     * @example
     * // Get one Administrateur
     * const administrateur = await prisma.administrateur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends administrateurFindUniqueArgs>(args: SelectSubset<T, administrateurFindUniqueArgs<ExtArgs>>): Prisma__administrateurClient<$Result.GetResult<Prisma.$administrateurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Administrateur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {administrateurFindUniqueOrThrowArgs} args - Arguments to find a Administrateur
     * @example
     * // Get one Administrateur
     * const administrateur = await prisma.administrateur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends administrateurFindUniqueOrThrowArgs>(args: SelectSubset<T, administrateurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__administrateurClient<$Result.GetResult<Prisma.$administrateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administrateur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {administrateurFindFirstArgs} args - Arguments to find a Administrateur
     * @example
     * // Get one Administrateur
     * const administrateur = await prisma.administrateur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends administrateurFindFirstArgs>(args?: SelectSubset<T, administrateurFindFirstArgs<ExtArgs>>): Prisma__administrateurClient<$Result.GetResult<Prisma.$administrateurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administrateur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {administrateurFindFirstOrThrowArgs} args - Arguments to find a Administrateur
     * @example
     * // Get one Administrateur
     * const administrateur = await prisma.administrateur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends administrateurFindFirstOrThrowArgs>(args?: SelectSubset<T, administrateurFindFirstOrThrowArgs<ExtArgs>>): Prisma__administrateurClient<$Result.GetResult<Prisma.$administrateurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Administrateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {administrateurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Administrateurs
     * const administrateurs = await prisma.administrateur.findMany()
     * 
     * // Get first 10 Administrateurs
     * const administrateurs = await prisma.administrateur.findMany({ take: 10 })
     * 
     * // Only select the `id_administrateur`
     * const administrateurWithId_administrateurOnly = await prisma.administrateur.findMany({ select: { id_administrateur: true } })
     * 
     */
    findMany<T extends administrateurFindManyArgs>(args?: SelectSubset<T, administrateurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$administrateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Administrateur.
     * @param {administrateurCreateArgs} args - Arguments to create a Administrateur.
     * @example
     * // Create one Administrateur
     * const Administrateur = await prisma.administrateur.create({
     *   data: {
     *     // ... data to create a Administrateur
     *   }
     * })
     * 
     */
    create<T extends administrateurCreateArgs>(args: SelectSubset<T, administrateurCreateArgs<ExtArgs>>): Prisma__administrateurClient<$Result.GetResult<Prisma.$administrateurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Administrateurs.
     * @param {administrateurCreateManyArgs} args - Arguments to create many Administrateurs.
     * @example
     * // Create many Administrateurs
     * const administrateur = await prisma.administrateur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends administrateurCreateManyArgs>(args?: SelectSubset<T, administrateurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Administrateurs and returns the data saved in the database.
     * @param {administrateurCreateManyAndReturnArgs} args - Arguments to create many Administrateurs.
     * @example
     * // Create many Administrateurs
     * const administrateur = await prisma.administrateur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Administrateurs and only return the `id_administrateur`
     * const administrateurWithId_administrateurOnly = await prisma.administrateur.createManyAndReturn({
     *   select: { id_administrateur: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends administrateurCreateManyAndReturnArgs>(args?: SelectSubset<T, administrateurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$administrateurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Administrateur.
     * @param {administrateurDeleteArgs} args - Arguments to delete one Administrateur.
     * @example
     * // Delete one Administrateur
     * const Administrateur = await prisma.administrateur.delete({
     *   where: {
     *     // ... filter to delete one Administrateur
     *   }
     * })
     * 
     */
    delete<T extends administrateurDeleteArgs>(args: SelectSubset<T, administrateurDeleteArgs<ExtArgs>>): Prisma__administrateurClient<$Result.GetResult<Prisma.$administrateurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Administrateur.
     * @param {administrateurUpdateArgs} args - Arguments to update one Administrateur.
     * @example
     * // Update one Administrateur
     * const administrateur = await prisma.administrateur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends administrateurUpdateArgs>(args: SelectSubset<T, administrateurUpdateArgs<ExtArgs>>): Prisma__administrateurClient<$Result.GetResult<Prisma.$administrateurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Administrateurs.
     * @param {administrateurDeleteManyArgs} args - Arguments to filter Administrateurs to delete.
     * @example
     * // Delete a few Administrateurs
     * const { count } = await prisma.administrateur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends administrateurDeleteManyArgs>(args?: SelectSubset<T, administrateurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Administrateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {administrateurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Administrateurs
     * const administrateur = await prisma.administrateur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends administrateurUpdateManyArgs>(args: SelectSubset<T, administrateurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Administrateurs and returns the data updated in the database.
     * @param {administrateurUpdateManyAndReturnArgs} args - Arguments to update many Administrateurs.
     * @example
     * // Update many Administrateurs
     * const administrateur = await prisma.administrateur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Administrateurs and only return the `id_administrateur`
     * const administrateurWithId_administrateurOnly = await prisma.administrateur.updateManyAndReturn({
     *   select: { id_administrateur: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends administrateurUpdateManyAndReturnArgs>(args: SelectSubset<T, administrateurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$administrateurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Administrateur.
     * @param {administrateurUpsertArgs} args - Arguments to update or create a Administrateur.
     * @example
     * // Update or create a Administrateur
     * const administrateur = await prisma.administrateur.upsert({
     *   create: {
     *     // ... data to create a Administrateur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Administrateur we want to update
     *   }
     * })
     */
    upsert<T extends administrateurUpsertArgs>(args: SelectSubset<T, administrateurUpsertArgs<ExtArgs>>): Prisma__administrateurClient<$Result.GetResult<Prisma.$administrateurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Administrateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {administrateurCountArgs} args - Arguments to filter Administrateurs to count.
     * @example
     * // Count the number of Administrateurs
     * const count = await prisma.administrateur.count({
     *   where: {
     *     // ... the filter for the Administrateurs we want to count
     *   }
     * })
    **/
    count<T extends administrateurCountArgs>(
      args?: Subset<T, administrateurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdministrateurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Administrateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministrateurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdministrateurAggregateArgs>(args: Subset<T, AdministrateurAggregateArgs>): Prisma.PrismaPromise<GetAdministrateurAggregateType<T>>

    /**
     * Group by Administrateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {administrateurGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends administrateurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: administrateurGroupByArgs['orderBy'] }
        : { orderBy?: administrateurGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, administrateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdministrateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the administrateur model
   */
  readonly fields: administrateurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for administrateur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__administrateurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the administrateur model
   */
  interface administrateurFieldRefs {
    readonly id_administrateur: FieldRef<"administrateur", 'Int'>
    readonly nom: FieldRef<"administrateur", 'String'>
    readonly prenom: FieldRef<"administrateur", 'String'>
    readonly email: FieldRef<"administrateur", 'String'>
    readonly password: FieldRef<"administrateur", 'String'>
  }
    

  // Custom InputTypes
  /**
   * administrateur findUnique
   */
  export type administrateurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrateur
     */
    select?: administrateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administrateur
     */
    omit?: administrateurOmit<ExtArgs> | null
    /**
     * Filter, which administrateur to fetch.
     */
    where: administrateurWhereUniqueInput
  }

  /**
   * administrateur findUniqueOrThrow
   */
  export type administrateurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrateur
     */
    select?: administrateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administrateur
     */
    omit?: administrateurOmit<ExtArgs> | null
    /**
     * Filter, which administrateur to fetch.
     */
    where: administrateurWhereUniqueInput
  }

  /**
   * administrateur findFirst
   */
  export type administrateurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrateur
     */
    select?: administrateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administrateur
     */
    omit?: administrateurOmit<ExtArgs> | null
    /**
     * Filter, which administrateur to fetch.
     */
    where?: administrateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of administrateurs to fetch.
     */
    orderBy?: administrateurOrderByWithRelationInput | administrateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for administrateurs.
     */
    cursor?: administrateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` administrateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` administrateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of administrateurs.
     */
    distinct?: AdministrateurScalarFieldEnum | AdministrateurScalarFieldEnum[]
  }

  /**
   * administrateur findFirstOrThrow
   */
  export type administrateurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrateur
     */
    select?: administrateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administrateur
     */
    omit?: administrateurOmit<ExtArgs> | null
    /**
     * Filter, which administrateur to fetch.
     */
    where?: administrateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of administrateurs to fetch.
     */
    orderBy?: administrateurOrderByWithRelationInput | administrateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for administrateurs.
     */
    cursor?: administrateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` administrateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` administrateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of administrateurs.
     */
    distinct?: AdministrateurScalarFieldEnum | AdministrateurScalarFieldEnum[]
  }

  /**
   * administrateur findMany
   */
  export type administrateurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrateur
     */
    select?: administrateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administrateur
     */
    omit?: administrateurOmit<ExtArgs> | null
    /**
     * Filter, which administrateurs to fetch.
     */
    where?: administrateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of administrateurs to fetch.
     */
    orderBy?: administrateurOrderByWithRelationInput | administrateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing administrateurs.
     */
    cursor?: administrateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` administrateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` administrateurs.
     */
    skip?: number
    distinct?: AdministrateurScalarFieldEnum | AdministrateurScalarFieldEnum[]
  }

  /**
   * administrateur create
   */
  export type administrateurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrateur
     */
    select?: administrateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administrateur
     */
    omit?: administrateurOmit<ExtArgs> | null
    /**
     * The data needed to create a administrateur.
     */
    data: XOR<administrateurCreateInput, administrateurUncheckedCreateInput>
  }

  /**
   * administrateur createMany
   */
  export type administrateurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many administrateurs.
     */
    data: administrateurCreateManyInput | administrateurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * administrateur createManyAndReturn
   */
  export type administrateurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrateur
     */
    select?: administrateurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the administrateur
     */
    omit?: administrateurOmit<ExtArgs> | null
    /**
     * The data used to create many administrateurs.
     */
    data: administrateurCreateManyInput | administrateurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * administrateur update
   */
  export type administrateurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrateur
     */
    select?: administrateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administrateur
     */
    omit?: administrateurOmit<ExtArgs> | null
    /**
     * The data needed to update a administrateur.
     */
    data: XOR<administrateurUpdateInput, administrateurUncheckedUpdateInput>
    /**
     * Choose, which administrateur to update.
     */
    where: administrateurWhereUniqueInput
  }

  /**
   * administrateur updateMany
   */
  export type administrateurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update administrateurs.
     */
    data: XOR<administrateurUpdateManyMutationInput, administrateurUncheckedUpdateManyInput>
    /**
     * Filter which administrateurs to update
     */
    where?: administrateurWhereInput
    /**
     * Limit how many administrateurs to update.
     */
    limit?: number
  }

  /**
   * administrateur updateManyAndReturn
   */
  export type administrateurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrateur
     */
    select?: administrateurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the administrateur
     */
    omit?: administrateurOmit<ExtArgs> | null
    /**
     * The data used to update administrateurs.
     */
    data: XOR<administrateurUpdateManyMutationInput, administrateurUncheckedUpdateManyInput>
    /**
     * Filter which administrateurs to update
     */
    where?: administrateurWhereInput
    /**
     * Limit how many administrateurs to update.
     */
    limit?: number
  }

  /**
   * administrateur upsert
   */
  export type administrateurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrateur
     */
    select?: administrateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administrateur
     */
    omit?: administrateurOmit<ExtArgs> | null
    /**
     * The filter to search for the administrateur to update in case it exists.
     */
    where: administrateurWhereUniqueInput
    /**
     * In case the administrateur found by the `where` argument doesn't exist, create a new administrateur with this data.
     */
    create: XOR<administrateurCreateInput, administrateurUncheckedCreateInput>
    /**
     * In case the administrateur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<administrateurUpdateInput, administrateurUncheckedUpdateInput>
  }

  /**
   * administrateur delete
   */
  export type administrateurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrateur
     */
    select?: administrateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administrateur
     */
    omit?: administrateurOmit<ExtArgs> | null
    /**
     * Filter which administrateur to delete.
     */
    where: administrateurWhereUniqueInput
  }

  /**
   * administrateur deleteMany
   */
  export type administrateurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which administrateurs to delete
     */
    where?: administrateurWhereInput
    /**
     * Limit how many administrateurs to delete.
     */
    limit?: number
  }

  /**
   * administrateur without action
   */
  export type administrateurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrateur
     */
    select?: administrateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administrateur
     */
    omit?: administrateurOmit<ExtArgs> | null
  }


  /**
   * Model apprenant
   */

  export type AggregateApprenant = {
    _count: ApprenantCountAggregateOutputType | null
    _avg: ApprenantAvgAggregateOutputType | null
    _sum: ApprenantSumAggregateOutputType | null
    _min: ApprenantMinAggregateOutputType | null
    _max: ApprenantMaxAggregateOutputType | null
  }

  export type ApprenantAvgAggregateOutputType = {
    id_apprenant: number | null
  }

  export type ApprenantSumAggregateOutputType = {
    id_apprenant: number | null
  }

  export type ApprenantMinAggregateOutputType = {
    id_apprenant: number | null
    nom: string | null
    prenom: string | null
    email: string | null
    password: string | null
    referentiel: $Enums.Referentiel | null
    photoProfil: string | null
  }

  export type ApprenantMaxAggregateOutputType = {
    id_apprenant: number | null
    nom: string | null
    prenom: string | null
    email: string | null
    password: string | null
    referentiel: $Enums.Referentiel | null
    photoProfil: string | null
  }

  export type ApprenantCountAggregateOutputType = {
    id_apprenant: number
    nom: number
    prenom: number
    email: number
    password: number
    referentiel: number
    photoProfil: number
    _all: number
  }


  export type ApprenantAvgAggregateInputType = {
    id_apprenant?: true
  }

  export type ApprenantSumAggregateInputType = {
    id_apprenant?: true
  }

  export type ApprenantMinAggregateInputType = {
    id_apprenant?: true
    nom?: true
    prenom?: true
    email?: true
    password?: true
    referentiel?: true
    photoProfil?: true
  }

  export type ApprenantMaxAggregateInputType = {
    id_apprenant?: true
    nom?: true
    prenom?: true
    email?: true
    password?: true
    referentiel?: true
    photoProfil?: true
  }

  export type ApprenantCountAggregateInputType = {
    id_apprenant?: true
    nom?: true
    prenom?: true
    email?: true
    password?: true
    referentiel?: true
    photoProfil?: true
    _all?: true
  }

  export type ApprenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which apprenant to aggregate.
     */
    where?: apprenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apprenants to fetch.
     */
    orderBy?: apprenantOrderByWithRelationInput | apprenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: apprenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apprenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apprenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned apprenants
    **/
    _count?: true | ApprenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApprenantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApprenantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApprenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApprenantMaxAggregateInputType
  }

  export type GetApprenantAggregateType<T extends ApprenantAggregateArgs> = {
        [P in keyof T & keyof AggregateApprenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApprenant[P]>
      : GetScalarType<T[P], AggregateApprenant[P]>
  }




  export type apprenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: apprenantWhereInput
    orderBy?: apprenantOrderByWithAggregationInput | apprenantOrderByWithAggregationInput[]
    by: ApprenantScalarFieldEnum[] | ApprenantScalarFieldEnum
    having?: apprenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApprenantCountAggregateInputType | true
    _avg?: ApprenantAvgAggregateInputType
    _sum?: ApprenantSumAggregateInputType
    _min?: ApprenantMinAggregateInputType
    _max?: ApprenantMaxAggregateInputType
  }

  export type ApprenantGroupByOutputType = {
    id_apprenant: number
    nom: string
    prenom: string
    email: string
    password: string
    referentiel: $Enums.Referentiel
    photoProfil: string | null
    _count: ApprenantCountAggregateOutputType | null
    _avg: ApprenantAvgAggregateOutputType | null
    _sum: ApprenantSumAggregateOutputType | null
    _min: ApprenantMinAggregateOutputType | null
    _max: ApprenantMaxAggregateOutputType | null
  }

  type GetApprenantGroupByPayload<T extends apprenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApprenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApprenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApprenantGroupByOutputType[P]>
            : GetScalarType<T[P], ApprenantGroupByOutputType[P]>
        }
      >
    >


  export type apprenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_apprenant?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    password?: boolean
    referentiel?: boolean
    photoProfil?: boolean
    veille?: boolean | apprenant$veilleArgs<ExtArgs>
    suiviCours?: boolean | apprenant$suiviCoursArgs<ExtArgs>
    Soumission?: boolean | apprenant$SoumissionArgs<ExtArgs>
    _count?: boolean | ApprenantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apprenant"]>

  export type apprenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_apprenant?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    password?: boolean
    referentiel?: boolean
    photoProfil?: boolean
  }, ExtArgs["result"]["apprenant"]>

  export type apprenantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_apprenant?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    password?: boolean
    referentiel?: boolean
    photoProfil?: boolean
  }, ExtArgs["result"]["apprenant"]>

  export type apprenantSelectScalar = {
    id_apprenant?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    password?: boolean
    referentiel?: boolean
    photoProfil?: boolean
  }

  export type apprenantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_apprenant" | "nom" | "prenom" | "email" | "password" | "referentiel" | "photoProfil", ExtArgs["result"]["apprenant"]>
  export type apprenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    veille?: boolean | apprenant$veilleArgs<ExtArgs>
    suiviCours?: boolean | apprenant$suiviCoursArgs<ExtArgs>
    Soumission?: boolean | apprenant$SoumissionArgs<ExtArgs>
    _count?: boolean | ApprenantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type apprenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type apprenantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $apprenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "apprenant"
    objects: {
      veille: Prisma.$veillePayload<ExtArgs>[]
      suiviCours: Prisma.$suiviCoursPayload<ExtArgs>[]
      Soumission: Prisma.$SoumissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_apprenant: number
      nom: string
      prenom: string
      email: string
      password: string
      referentiel: $Enums.Referentiel
      photoProfil: string | null
    }, ExtArgs["result"]["apprenant"]>
    composites: {}
  }

  type apprenantGetPayload<S extends boolean | null | undefined | apprenantDefaultArgs> = $Result.GetResult<Prisma.$apprenantPayload, S>

  type apprenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<apprenantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApprenantCountAggregateInputType | true
    }

  export interface apprenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['apprenant'], meta: { name: 'apprenant' } }
    /**
     * Find zero or one Apprenant that matches the filter.
     * @param {apprenantFindUniqueArgs} args - Arguments to find a Apprenant
     * @example
     * // Get one Apprenant
     * const apprenant = await prisma.apprenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends apprenantFindUniqueArgs>(args: SelectSubset<T, apprenantFindUniqueArgs<ExtArgs>>): Prisma__apprenantClient<$Result.GetResult<Prisma.$apprenantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Apprenant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {apprenantFindUniqueOrThrowArgs} args - Arguments to find a Apprenant
     * @example
     * // Get one Apprenant
     * const apprenant = await prisma.apprenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends apprenantFindUniqueOrThrowArgs>(args: SelectSubset<T, apprenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__apprenantClient<$Result.GetResult<Prisma.$apprenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Apprenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apprenantFindFirstArgs} args - Arguments to find a Apprenant
     * @example
     * // Get one Apprenant
     * const apprenant = await prisma.apprenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends apprenantFindFirstArgs>(args?: SelectSubset<T, apprenantFindFirstArgs<ExtArgs>>): Prisma__apprenantClient<$Result.GetResult<Prisma.$apprenantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Apprenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apprenantFindFirstOrThrowArgs} args - Arguments to find a Apprenant
     * @example
     * // Get one Apprenant
     * const apprenant = await prisma.apprenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends apprenantFindFirstOrThrowArgs>(args?: SelectSubset<T, apprenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__apprenantClient<$Result.GetResult<Prisma.$apprenantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Apprenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apprenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Apprenants
     * const apprenants = await prisma.apprenant.findMany()
     * 
     * // Get first 10 Apprenants
     * const apprenants = await prisma.apprenant.findMany({ take: 10 })
     * 
     * // Only select the `id_apprenant`
     * const apprenantWithId_apprenantOnly = await prisma.apprenant.findMany({ select: { id_apprenant: true } })
     * 
     */
    findMany<T extends apprenantFindManyArgs>(args?: SelectSubset<T, apprenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apprenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Apprenant.
     * @param {apprenantCreateArgs} args - Arguments to create a Apprenant.
     * @example
     * // Create one Apprenant
     * const Apprenant = await prisma.apprenant.create({
     *   data: {
     *     // ... data to create a Apprenant
     *   }
     * })
     * 
     */
    create<T extends apprenantCreateArgs>(args: SelectSubset<T, apprenantCreateArgs<ExtArgs>>): Prisma__apprenantClient<$Result.GetResult<Prisma.$apprenantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Apprenants.
     * @param {apprenantCreateManyArgs} args - Arguments to create many Apprenants.
     * @example
     * // Create many Apprenants
     * const apprenant = await prisma.apprenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends apprenantCreateManyArgs>(args?: SelectSubset<T, apprenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Apprenants and returns the data saved in the database.
     * @param {apprenantCreateManyAndReturnArgs} args - Arguments to create many Apprenants.
     * @example
     * // Create many Apprenants
     * const apprenant = await prisma.apprenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Apprenants and only return the `id_apprenant`
     * const apprenantWithId_apprenantOnly = await prisma.apprenant.createManyAndReturn({
     *   select: { id_apprenant: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends apprenantCreateManyAndReturnArgs>(args?: SelectSubset<T, apprenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apprenantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Apprenant.
     * @param {apprenantDeleteArgs} args - Arguments to delete one Apprenant.
     * @example
     * // Delete one Apprenant
     * const Apprenant = await prisma.apprenant.delete({
     *   where: {
     *     // ... filter to delete one Apprenant
     *   }
     * })
     * 
     */
    delete<T extends apprenantDeleteArgs>(args: SelectSubset<T, apprenantDeleteArgs<ExtArgs>>): Prisma__apprenantClient<$Result.GetResult<Prisma.$apprenantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Apprenant.
     * @param {apprenantUpdateArgs} args - Arguments to update one Apprenant.
     * @example
     * // Update one Apprenant
     * const apprenant = await prisma.apprenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends apprenantUpdateArgs>(args: SelectSubset<T, apprenantUpdateArgs<ExtArgs>>): Prisma__apprenantClient<$Result.GetResult<Prisma.$apprenantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Apprenants.
     * @param {apprenantDeleteManyArgs} args - Arguments to filter Apprenants to delete.
     * @example
     * // Delete a few Apprenants
     * const { count } = await prisma.apprenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends apprenantDeleteManyArgs>(args?: SelectSubset<T, apprenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apprenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apprenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Apprenants
     * const apprenant = await prisma.apprenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends apprenantUpdateManyArgs>(args: SelectSubset<T, apprenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apprenants and returns the data updated in the database.
     * @param {apprenantUpdateManyAndReturnArgs} args - Arguments to update many Apprenants.
     * @example
     * // Update many Apprenants
     * const apprenant = await prisma.apprenant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Apprenants and only return the `id_apprenant`
     * const apprenantWithId_apprenantOnly = await prisma.apprenant.updateManyAndReturn({
     *   select: { id_apprenant: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends apprenantUpdateManyAndReturnArgs>(args: SelectSubset<T, apprenantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apprenantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Apprenant.
     * @param {apprenantUpsertArgs} args - Arguments to update or create a Apprenant.
     * @example
     * // Update or create a Apprenant
     * const apprenant = await prisma.apprenant.upsert({
     *   create: {
     *     // ... data to create a Apprenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Apprenant we want to update
     *   }
     * })
     */
    upsert<T extends apprenantUpsertArgs>(args: SelectSubset<T, apprenantUpsertArgs<ExtArgs>>): Prisma__apprenantClient<$Result.GetResult<Prisma.$apprenantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Apprenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apprenantCountArgs} args - Arguments to filter Apprenants to count.
     * @example
     * // Count the number of Apprenants
     * const count = await prisma.apprenant.count({
     *   where: {
     *     // ... the filter for the Apprenants we want to count
     *   }
     * })
    **/
    count<T extends apprenantCountArgs>(
      args?: Subset<T, apprenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApprenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Apprenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApprenantAggregateArgs>(args: Subset<T, ApprenantAggregateArgs>): Prisma.PrismaPromise<GetApprenantAggregateType<T>>

    /**
     * Group by Apprenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apprenantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends apprenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: apprenantGroupByArgs['orderBy'] }
        : { orderBy?: apprenantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, apprenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApprenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the apprenant model
   */
  readonly fields: apprenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for apprenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__apprenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    veille<T extends apprenant$veilleArgs<ExtArgs> = {}>(args?: Subset<T, apprenant$veilleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$veillePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    suiviCours<T extends apprenant$suiviCoursArgs<ExtArgs> = {}>(args?: Subset<T, apprenant$suiviCoursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$suiviCoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Soumission<T extends apprenant$SoumissionArgs<ExtArgs> = {}>(args?: Subset<T, apprenant$SoumissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoumissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the apprenant model
   */
  interface apprenantFieldRefs {
    readonly id_apprenant: FieldRef<"apprenant", 'Int'>
    readonly nom: FieldRef<"apprenant", 'String'>
    readonly prenom: FieldRef<"apprenant", 'String'>
    readonly email: FieldRef<"apprenant", 'String'>
    readonly password: FieldRef<"apprenant", 'String'>
    readonly referentiel: FieldRef<"apprenant", 'Referentiel'>
    readonly photoProfil: FieldRef<"apprenant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * apprenant findUnique
   */
  export type apprenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apprenant
     */
    select?: apprenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apprenant
     */
    omit?: apprenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apprenantInclude<ExtArgs> | null
    /**
     * Filter, which apprenant to fetch.
     */
    where: apprenantWhereUniqueInput
  }

  /**
   * apprenant findUniqueOrThrow
   */
  export type apprenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apprenant
     */
    select?: apprenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apprenant
     */
    omit?: apprenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apprenantInclude<ExtArgs> | null
    /**
     * Filter, which apprenant to fetch.
     */
    where: apprenantWhereUniqueInput
  }

  /**
   * apprenant findFirst
   */
  export type apprenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apprenant
     */
    select?: apprenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apprenant
     */
    omit?: apprenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apprenantInclude<ExtArgs> | null
    /**
     * Filter, which apprenant to fetch.
     */
    where?: apprenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apprenants to fetch.
     */
    orderBy?: apprenantOrderByWithRelationInput | apprenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for apprenants.
     */
    cursor?: apprenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apprenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apprenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of apprenants.
     */
    distinct?: ApprenantScalarFieldEnum | ApprenantScalarFieldEnum[]
  }

  /**
   * apprenant findFirstOrThrow
   */
  export type apprenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apprenant
     */
    select?: apprenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apprenant
     */
    omit?: apprenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apprenantInclude<ExtArgs> | null
    /**
     * Filter, which apprenant to fetch.
     */
    where?: apprenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apprenants to fetch.
     */
    orderBy?: apprenantOrderByWithRelationInput | apprenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for apprenants.
     */
    cursor?: apprenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apprenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apprenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of apprenants.
     */
    distinct?: ApprenantScalarFieldEnum | ApprenantScalarFieldEnum[]
  }

  /**
   * apprenant findMany
   */
  export type apprenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apprenant
     */
    select?: apprenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apprenant
     */
    omit?: apprenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apprenantInclude<ExtArgs> | null
    /**
     * Filter, which apprenants to fetch.
     */
    where?: apprenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apprenants to fetch.
     */
    orderBy?: apprenantOrderByWithRelationInput | apprenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing apprenants.
     */
    cursor?: apprenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apprenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apprenants.
     */
    skip?: number
    distinct?: ApprenantScalarFieldEnum | ApprenantScalarFieldEnum[]
  }

  /**
   * apprenant create
   */
  export type apprenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apprenant
     */
    select?: apprenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apprenant
     */
    omit?: apprenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apprenantInclude<ExtArgs> | null
    /**
     * The data needed to create a apprenant.
     */
    data: XOR<apprenantCreateInput, apprenantUncheckedCreateInput>
  }

  /**
   * apprenant createMany
   */
  export type apprenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many apprenants.
     */
    data: apprenantCreateManyInput | apprenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * apprenant createManyAndReturn
   */
  export type apprenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apprenant
     */
    select?: apprenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the apprenant
     */
    omit?: apprenantOmit<ExtArgs> | null
    /**
     * The data used to create many apprenants.
     */
    data: apprenantCreateManyInput | apprenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * apprenant update
   */
  export type apprenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apprenant
     */
    select?: apprenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apprenant
     */
    omit?: apprenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apprenantInclude<ExtArgs> | null
    /**
     * The data needed to update a apprenant.
     */
    data: XOR<apprenantUpdateInput, apprenantUncheckedUpdateInput>
    /**
     * Choose, which apprenant to update.
     */
    where: apprenantWhereUniqueInput
  }

  /**
   * apprenant updateMany
   */
  export type apprenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update apprenants.
     */
    data: XOR<apprenantUpdateManyMutationInput, apprenantUncheckedUpdateManyInput>
    /**
     * Filter which apprenants to update
     */
    where?: apprenantWhereInput
    /**
     * Limit how many apprenants to update.
     */
    limit?: number
  }

  /**
   * apprenant updateManyAndReturn
   */
  export type apprenantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apprenant
     */
    select?: apprenantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the apprenant
     */
    omit?: apprenantOmit<ExtArgs> | null
    /**
     * The data used to update apprenants.
     */
    data: XOR<apprenantUpdateManyMutationInput, apprenantUncheckedUpdateManyInput>
    /**
     * Filter which apprenants to update
     */
    where?: apprenantWhereInput
    /**
     * Limit how many apprenants to update.
     */
    limit?: number
  }

  /**
   * apprenant upsert
   */
  export type apprenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apprenant
     */
    select?: apprenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apprenant
     */
    omit?: apprenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apprenantInclude<ExtArgs> | null
    /**
     * The filter to search for the apprenant to update in case it exists.
     */
    where: apprenantWhereUniqueInput
    /**
     * In case the apprenant found by the `where` argument doesn't exist, create a new apprenant with this data.
     */
    create: XOR<apprenantCreateInput, apprenantUncheckedCreateInput>
    /**
     * In case the apprenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<apprenantUpdateInput, apprenantUncheckedUpdateInput>
  }

  /**
   * apprenant delete
   */
  export type apprenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apprenant
     */
    select?: apprenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apprenant
     */
    omit?: apprenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apprenantInclude<ExtArgs> | null
    /**
     * Filter which apprenant to delete.
     */
    where: apprenantWhereUniqueInput
  }

  /**
   * apprenant deleteMany
   */
  export type apprenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which apprenants to delete
     */
    where?: apprenantWhereInput
    /**
     * Limit how many apprenants to delete.
     */
    limit?: number
  }

  /**
   * apprenant.veille
   */
  export type apprenant$veilleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veille
     */
    select?: veilleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veille
     */
    omit?: veilleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veilleInclude<ExtArgs> | null
    where?: veilleWhereInput
    orderBy?: veilleOrderByWithRelationInput | veilleOrderByWithRelationInput[]
    cursor?: veilleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VeilleScalarFieldEnum | VeilleScalarFieldEnum[]
  }

  /**
   * apprenant.suiviCours
   */
  export type apprenant$suiviCoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suiviCours
     */
    select?: suiviCoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suiviCours
     */
    omit?: suiviCoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suiviCoursInclude<ExtArgs> | null
    where?: suiviCoursWhereInput
    orderBy?: suiviCoursOrderByWithRelationInput | suiviCoursOrderByWithRelationInput[]
    cursor?: suiviCoursWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SuiviCoursScalarFieldEnum | SuiviCoursScalarFieldEnum[]
  }

  /**
   * apprenant.Soumission
   */
  export type apprenant$SoumissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Soumission
     */
    select?: SoumissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Soumission
     */
    omit?: SoumissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoumissionInclude<ExtArgs> | null
    where?: SoumissionWhereInput
    orderBy?: SoumissionOrderByWithRelationInput | SoumissionOrderByWithRelationInput[]
    cursor?: SoumissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SoumissionScalarFieldEnum | SoumissionScalarFieldEnum[]
  }

  /**
   * apprenant without action
   */
  export type apprenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apprenant
     */
    select?: apprenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apprenant
     */
    omit?: apprenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apprenantInclude<ExtArgs> | null
  }


  /**
   * Model suiviCours
   */

  export type AggregateSuiviCours = {
    _count: SuiviCoursCountAggregateOutputType | null
    _avg: SuiviCoursAvgAggregateOutputType | null
    _sum: SuiviCoursSumAggregateOutputType | null
    _min: SuiviCoursMinAggregateOutputType | null
    _max: SuiviCoursMaxAggregateOutputType | null
  }

  export type SuiviCoursAvgAggregateOutputType = {
    id_suiviCours: number | null
    pourcentage: Decimal | null
    id_apprenant: number | null
    id_cours: number | null
  }

  export type SuiviCoursSumAggregateOutputType = {
    id_suiviCours: number | null
    pourcentage: Decimal | null
    id_apprenant: number | null
    id_cours: number | null
  }

  export type SuiviCoursMinAggregateOutputType = {
    id_suiviCours: number | null
    dateDebut: Date | null
    dateFin: Date | null
    pourcentage: Decimal | null
    id_apprenant: number | null
    id_cours: number | null
  }

  export type SuiviCoursMaxAggregateOutputType = {
    id_suiviCours: number | null
    dateDebut: Date | null
    dateFin: Date | null
    pourcentage: Decimal | null
    id_apprenant: number | null
    id_cours: number | null
  }

  export type SuiviCoursCountAggregateOutputType = {
    id_suiviCours: number
    dateDebut: number
    dateFin: number
    pourcentage: number
    id_apprenant: number
    id_cours: number
    _all: number
  }


  export type SuiviCoursAvgAggregateInputType = {
    id_suiviCours?: true
    pourcentage?: true
    id_apprenant?: true
    id_cours?: true
  }

  export type SuiviCoursSumAggregateInputType = {
    id_suiviCours?: true
    pourcentage?: true
    id_apprenant?: true
    id_cours?: true
  }

  export type SuiviCoursMinAggregateInputType = {
    id_suiviCours?: true
    dateDebut?: true
    dateFin?: true
    pourcentage?: true
    id_apprenant?: true
    id_cours?: true
  }

  export type SuiviCoursMaxAggregateInputType = {
    id_suiviCours?: true
    dateDebut?: true
    dateFin?: true
    pourcentage?: true
    id_apprenant?: true
    id_cours?: true
  }

  export type SuiviCoursCountAggregateInputType = {
    id_suiviCours?: true
    dateDebut?: true
    dateFin?: true
    pourcentage?: true
    id_apprenant?: true
    id_cours?: true
    _all?: true
  }

  export type SuiviCoursAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which suiviCours to aggregate.
     */
    where?: suiviCoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suiviCours to fetch.
     */
    orderBy?: suiviCoursOrderByWithRelationInput | suiviCoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: suiviCoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suiviCours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suiviCours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned suiviCours
    **/
    _count?: true | SuiviCoursCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SuiviCoursAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SuiviCoursSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuiviCoursMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuiviCoursMaxAggregateInputType
  }

  export type GetSuiviCoursAggregateType<T extends SuiviCoursAggregateArgs> = {
        [P in keyof T & keyof AggregateSuiviCours]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuiviCours[P]>
      : GetScalarType<T[P], AggregateSuiviCours[P]>
  }




  export type suiviCoursGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: suiviCoursWhereInput
    orderBy?: suiviCoursOrderByWithAggregationInput | suiviCoursOrderByWithAggregationInput[]
    by: SuiviCoursScalarFieldEnum[] | SuiviCoursScalarFieldEnum
    having?: suiviCoursScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuiviCoursCountAggregateInputType | true
    _avg?: SuiviCoursAvgAggregateInputType
    _sum?: SuiviCoursSumAggregateInputType
    _min?: SuiviCoursMinAggregateInputType
    _max?: SuiviCoursMaxAggregateInputType
  }

  export type SuiviCoursGroupByOutputType = {
    id_suiviCours: number
    dateDebut: Date
    dateFin: Date | null
    pourcentage: Decimal
    id_apprenant: number
    id_cours: number
    _count: SuiviCoursCountAggregateOutputType | null
    _avg: SuiviCoursAvgAggregateOutputType | null
    _sum: SuiviCoursSumAggregateOutputType | null
    _min: SuiviCoursMinAggregateOutputType | null
    _max: SuiviCoursMaxAggregateOutputType | null
  }

  type GetSuiviCoursGroupByPayload<T extends suiviCoursGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuiviCoursGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuiviCoursGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuiviCoursGroupByOutputType[P]>
            : GetScalarType<T[P], SuiviCoursGroupByOutputType[P]>
        }
      >
    >


  export type suiviCoursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_suiviCours?: boolean
    dateDebut?: boolean
    dateFin?: boolean
    pourcentage?: boolean
    id_apprenant?: boolean
    id_cours?: boolean
    apprenant?: boolean | apprenantDefaultArgs<ExtArgs>
    cours?: boolean | coursDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suiviCours"]>

  export type suiviCoursSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_suiviCours?: boolean
    dateDebut?: boolean
    dateFin?: boolean
    pourcentage?: boolean
    id_apprenant?: boolean
    id_cours?: boolean
    apprenant?: boolean | apprenantDefaultArgs<ExtArgs>
    cours?: boolean | coursDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suiviCours"]>

  export type suiviCoursSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_suiviCours?: boolean
    dateDebut?: boolean
    dateFin?: boolean
    pourcentage?: boolean
    id_apprenant?: boolean
    id_cours?: boolean
    apprenant?: boolean | apprenantDefaultArgs<ExtArgs>
    cours?: boolean | coursDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suiviCours"]>

  export type suiviCoursSelectScalar = {
    id_suiviCours?: boolean
    dateDebut?: boolean
    dateFin?: boolean
    pourcentage?: boolean
    id_apprenant?: boolean
    id_cours?: boolean
  }

  export type suiviCoursOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_suiviCours" | "dateDebut" | "dateFin" | "pourcentage" | "id_apprenant" | "id_cours", ExtArgs["result"]["suiviCours"]>
  export type suiviCoursInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apprenant?: boolean | apprenantDefaultArgs<ExtArgs>
    cours?: boolean | coursDefaultArgs<ExtArgs>
  }
  export type suiviCoursIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apprenant?: boolean | apprenantDefaultArgs<ExtArgs>
    cours?: boolean | coursDefaultArgs<ExtArgs>
  }
  export type suiviCoursIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apprenant?: boolean | apprenantDefaultArgs<ExtArgs>
    cours?: boolean | coursDefaultArgs<ExtArgs>
  }

  export type $suiviCoursPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "suiviCours"
    objects: {
      apprenant: Prisma.$apprenantPayload<ExtArgs>
      cours: Prisma.$coursPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_suiviCours: number
      dateDebut: Date
      dateFin: Date | null
      pourcentage: Prisma.Decimal
      id_apprenant: number
      id_cours: number
    }, ExtArgs["result"]["suiviCours"]>
    composites: {}
  }

  type suiviCoursGetPayload<S extends boolean | null | undefined | suiviCoursDefaultArgs> = $Result.GetResult<Prisma.$suiviCoursPayload, S>

  type suiviCoursCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<suiviCoursFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuiviCoursCountAggregateInputType | true
    }

  export interface suiviCoursDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['suiviCours'], meta: { name: 'suiviCours' } }
    /**
     * Find zero or one SuiviCours that matches the filter.
     * @param {suiviCoursFindUniqueArgs} args - Arguments to find a SuiviCours
     * @example
     * // Get one SuiviCours
     * const suiviCours = await prisma.suiviCours.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends suiviCoursFindUniqueArgs>(args: SelectSubset<T, suiviCoursFindUniqueArgs<ExtArgs>>): Prisma__suiviCoursClient<$Result.GetResult<Prisma.$suiviCoursPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SuiviCours that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {suiviCoursFindUniqueOrThrowArgs} args - Arguments to find a SuiviCours
     * @example
     * // Get one SuiviCours
     * const suiviCours = await prisma.suiviCours.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends suiviCoursFindUniqueOrThrowArgs>(args: SelectSubset<T, suiviCoursFindUniqueOrThrowArgs<ExtArgs>>): Prisma__suiviCoursClient<$Result.GetResult<Prisma.$suiviCoursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuiviCours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suiviCoursFindFirstArgs} args - Arguments to find a SuiviCours
     * @example
     * // Get one SuiviCours
     * const suiviCours = await prisma.suiviCours.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends suiviCoursFindFirstArgs>(args?: SelectSubset<T, suiviCoursFindFirstArgs<ExtArgs>>): Prisma__suiviCoursClient<$Result.GetResult<Prisma.$suiviCoursPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuiviCours that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suiviCoursFindFirstOrThrowArgs} args - Arguments to find a SuiviCours
     * @example
     * // Get one SuiviCours
     * const suiviCours = await prisma.suiviCours.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends suiviCoursFindFirstOrThrowArgs>(args?: SelectSubset<T, suiviCoursFindFirstOrThrowArgs<ExtArgs>>): Prisma__suiviCoursClient<$Result.GetResult<Prisma.$suiviCoursPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SuiviCours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suiviCoursFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SuiviCours
     * const suiviCours = await prisma.suiviCours.findMany()
     * 
     * // Get first 10 SuiviCours
     * const suiviCours = await prisma.suiviCours.findMany({ take: 10 })
     * 
     * // Only select the `id_suiviCours`
     * const suiviCoursWithId_suiviCoursOnly = await prisma.suiviCours.findMany({ select: { id_suiviCours: true } })
     * 
     */
    findMany<T extends suiviCoursFindManyArgs>(args?: SelectSubset<T, suiviCoursFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$suiviCoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SuiviCours.
     * @param {suiviCoursCreateArgs} args - Arguments to create a SuiviCours.
     * @example
     * // Create one SuiviCours
     * const SuiviCours = await prisma.suiviCours.create({
     *   data: {
     *     // ... data to create a SuiviCours
     *   }
     * })
     * 
     */
    create<T extends suiviCoursCreateArgs>(args: SelectSubset<T, suiviCoursCreateArgs<ExtArgs>>): Prisma__suiviCoursClient<$Result.GetResult<Prisma.$suiviCoursPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SuiviCours.
     * @param {suiviCoursCreateManyArgs} args - Arguments to create many SuiviCours.
     * @example
     * // Create many SuiviCours
     * const suiviCours = await prisma.suiviCours.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends suiviCoursCreateManyArgs>(args?: SelectSubset<T, suiviCoursCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SuiviCours and returns the data saved in the database.
     * @param {suiviCoursCreateManyAndReturnArgs} args - Arguments to create many SuiviCours.
     * @example
     * // Create many SuiviCours
     * const suiviCours = await prisma.suiviCours.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SuiviCours and only return the `id_suiviCours`
     * const suiviCoursWithId_suiviCoursOnly = await prisma.suiviCours.createManyAndReturn({
     *   select: { id_suiviCours: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends suiviCoursCreateManyAndReturnArgs>(args?: SelectSubset<T, suiviCoursCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$suiviCoursPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SuiviCours.
     * @param {suiviCoursDeleteArgs} args - Arguments to delete one SuiviCours.
     * @example
     * // Delete one SuiviCours
     * const SuiviCours = await prisma.suiviCours.delete({
     *   where: {
     *     // ... filter to delete one SuiviCours
     *   }
     * })
     * 
     */
    delete<T extends suiviCoursDeleteArgs>(args: SelectSubset<T, suiviCoursDeleteArgs<ExtArgs>>): Prisma__suiviCoursClient<$Result.GetResult<Prisma.$suiviCoursPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SuiviCours.
     * @param {suiviCoursUpdateArgs} args - Arguments to update one SuiviCours.
     * @example
     * // Update one SuiviCours
     * const suiviCours = await prisma.suiviCours.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends suiviCoursUpdateArgs>(args: SelectSubset<T, suiviCoursUpdateArgs<ExtArgs>>): Prisma__suiviCoursClient<$Result.GetResult<Prisma.$suiviCoursPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SuiviCours.
     * @param {suiviCoursDeleteManyArgs} args - Arguments to filter SuiviCours to delete.
     * @example
     * // Delete a few SuiviCours
     * const { count } = await prisma.suiviCours.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends suiviCoursDeleteManyArgs>(args?: SelectSubset<T, suiviCoursDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuiviCours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suiviCoursUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SuiviCours
     * const suiviCours = await prisma.suiviCours.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends suiviCoursUpdateManyArgs>(args: SelectSubset<T, suiviCoursUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuiviCours and returns the data updated in the database.
     * @param {suiviCoursUpdateManyAndReturnArgs} args - Arguments to update many SuiviCours.
     * @example
     * // Update many SuiviCours
     * const suiviCours = await prisma.suiviCours.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SuiviCours and only return the `id_suiviCours`
     * const suiviCoursWithId_suiviCoursOnly = await prisma.suiviCours.updateManyAndReturn({
     *   select: { id_suiviCours: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends suiviCoursUpdateManyAndReturnArgs>(args: SelectSubset<T, suiviCoursUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$suiviCoursPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SuiviCours.
     * @param {suiviCoursUpsertArgs} args - Arguments to update or create a SuiviCours.
     * @example
     * // Update or create a SuiviCours
     * const suiviCours = await prisma.suiviCours.upsert({
     *   create: {
     *     // ... data to create a SuiviCours
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SuiviCours we want to update
     *   }
     * })
     */
    upsert<T extends suiviCoursUpsertArgs>(args: SelectSubset<T, suiviCoursUpsertArgs<ExtArgs>>): Prisma__suiviCoursClient<$Result.GetResult<Prisma.$suiviCoursPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SuiviCours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suiviCoursCountArgs} args - Arguments to filter SuiviCours to count.
     * @example
     * // Count the number of SuiviCours
     * const count = await prisma.suiviCours.count({
     *   where: {
     *     // ... the filter for the SuiviCours we want to count
     *   }
     * })
    **/
    count<T extends suiviCoursCountArgs>(
      args?: Subset<T, suiviCoursCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuiviCoursCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SuiviCours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuiviCoursAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SuiviCoursAggregateArgs>(args: Subset<T, SuiviCoursAggregateArgs>): Prisma.PrismaPromise<GetSuiviCoursAggregateType<T>>

    /**
     * Group by SuiviCours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suiviCoursGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends suiviCoursGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: suiviCoursGroupByArgs['orderBy'] }
        : { orderBy?: suiviCoursGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, suiviCoursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuiviCoursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the suiviCours model
   */
  readonly fields: suiviCoursFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for suiviCours.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__suiviCoursClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    apprenant<T extends apprenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, apprenantDefaultArgs<ExtArgs>>): Prisma__apprenantClient<$Result.GetResult<Prisma.$apprenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cours<T extends coursDefaultArgs<ExtArgs> = {}>(args?: Subset<T, coursDefaultArgs<ExtArgs>>): Prisma__coursClient<$Result.GetResult<Prisma.$coursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the suiviCours model
   */
  interface suiviCoursFieldRefs {
    readonly id_suiviCours: FieldRef<"suiviCours", 'Int'>
    readonly dateDebut: FieldRef<"suiviCours", 'DateTime'>
    readonly dateFin: FieldRef<"suiviCours", 'DateTime'>
    readonly pourcentage: FieldRef<"suiviCours", 'Decimal'>
    readonly id_apprenant: FieldRef<"suiviCours", 'Int'>
    readonly id_cours: FieldRef<"suiviCours", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * suiviCours findUnique
   */
  export type suiviCoursFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suiviCours
     */
    select?: suiviCoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suiviCours
     */
    omit?: suiviCoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suiviCoursInclude<ExtArgs> | null
    /**
     * Filter, which suiviCours to fetch.
     */
    where: suiviCoursWhereUniqueInput
  }

  /**
   * suiviCours findUniqueOrThrow
   */
  export type suiviCoursFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suiviCours
     */
    select?: suiviCoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suiviCours
     */
    omit?: suiviCoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suiviCoursInclude<ExtArgs> | null
    /**
     * Filter, which suiviCours to fetch.
     */
    where: suiviCoursWhereUniqueInput
  }

  /**
   * suiviCours findFirst
   */
  export type suiviCoursFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suiviCours
     */
    select?: suiviCoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suiviCours
     */
    omit?: suiviCoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suiviCoursInclude<ExtArgs> | null
    /**
     * Filter, which suiviCours to fetch.
     */
    where?: suiviCoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suiviCours to fetch.
     */
    orderBy?: suiviCoursOrderByWithRelationInput | suiviCoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for suiviCours.
     */
    cursor?: suiviCoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suiviCours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suiviCours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of suiviCours.
     */
    distinct?: SuiviCoursScalarFieldEnum | SuiviCoursScalarFieldEnum[]
  }

  /**
   * suiviCours findFirstOrThrow
   */
  export type suiviCoursFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suiviCours
     */
    select?: suiviCoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suiviCours
     */
    omit?: suiviCoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suiviCoursInclude<ExtArgs> | null
    /**
     * Filter, which suiviCours to fetch.
     */
    where?: suiviCoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suiviCours to fetch.
     */
    orderBy?: suiviCoursOrderByWithRelationInput | suiviCoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for suiviCours.
     */
    cursor?: suiviCoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suiviCours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suiviCours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of suiviCours.
     */
    distinct?: SuiviCoursScalarFieldEnum | SuiviCoursScalarFieldEnum[]
  }

  /**
   * suiviCours findMany
   */
  export type suiviCoursFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suiviCours
     */
    select?: suiviCoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suiviCours
     */
    omit?: suiviCoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suiviCoursInclude<ExtArgs> | null
    /**
     * Filter, which suiviCours to fetch.
     */
    where?: suiviCoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suiviCours to fetch.
     */
    orderBy?: suiviCoursOrderByWithRelationInput | suiviCoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing suiviCours.
     */
    cursor?: suiviCoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suiviCours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suiviCours.
     */
    skip?: number
    distinct?: SuiviCoursScalarFieldEnum | SuiviCoursScalarFieldEnum[]
  }

  /**
   * suiviCours create
   */
  export type suiviCoursCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suiviCours
     */
    select?: suiviCoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suiviCours
     */
    omit?: suiviCoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suiviCoursInclude<ExtArgs> | null
    /**
     * The data needed to create a suiviCours.
     */
    data: XOR<suiviCoursCreateInput, suiviCoursUncheckedCreateInput>
  }

  /**
   * suiviCours createMany
   */
  export type suiviCoursCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many suiviCours.
     */
    data: suiviCoursCreateManyInput | suiviCoursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * suiviCours createManyAndReturn
   */
  export type suiviCoursCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suiviCours
     */
    select?: suiviCoursSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the suiviCours
     */
    omit?: suiviCoursOmit<ExtArgs> | null
    /**
     * The data used to create many suiviCours.
     */
    data: suiviCoursCreateManyInput | suiviCoursCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suiviCoursIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * suiviCours update
   */
  export type suiviCoursUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suiviCours
     */
    select?: suiviCoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suiviCours
     */
    omit?: suiviCoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suiviCoursInclude<ExtArgs> | null
    /**
     * The data needed to update a suiviCours.
     */
    data: XOR<suiviCoursUpdateInput, suiviCoursUncheckedUpdateInput>
    /**
     * Choose, which suiviCours to update.
     */
    where: suiviCoursWhereUniqueInput
  }

  /**
   * suiviCours updateMany
   */
  export type suiviCoursUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update suiviCours.
     */
    data: XOR<suiviCoursUpdateManyMutationInput, suiviCoursUncheckedUpdateManyInput>
    /**
     * Filter which suiviCours to update
     */
    where?: suiviCoursWhereInput
    /**
     * Limit how many suiviCours to update.
     */
    limit?: number
  }

  /**
   * suiviCours updateManyAndReturn
   */
  export type suiviCoursUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suiviCours
     */
    select?: suiviCoursSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the suiviCours
     */
    omit?: suiviCoursOmit<ExtArgs> | null
    /**
     * The data used to update suiviCours.
     */
    data: XOR<suiviCoursUpdateManyMutationInput, suiviCoursUncheckedUpdateManyInput>
    /**
     * Filter which suiviCours to update
     */
    where?: suiviCoursWhereInput
    /**
     * Limit how many suiviCours to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suiviCoursIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * suiviCours upsert
   */
  export type suiviCoursUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suiviCours
     */
    select?: suiviCoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suiviCours
     */
    omit?: suiviCoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suiviCoursInclude<ExtArgs> | null
    /**
     * The filter to search for the suiviCours to update in case it exists.
     */
    where: suiviCoursWhereUniqueInput
    /**
     * In case the suiviCours found by the `where` argument doesn't exist, create a new suiviCours with this data.
     */
    create: XOR<suiviCoursCreateInput, suiviCoursUncheckedCreateInput>
    /**
     * In case the suiviCours was found with the provided `where` argument, update it with this data.
     */
    update: XOR<suiviCoursUpdateInput, suiviCoursUncheckedUpdateInput>
  }

  /**
   * suiviCours delete
   */
  export type suiviCoursDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suiviCours
     */
    select?: suiviCoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suiviCours
     */
    omit?: suiviCoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suiviCoursInclude<ExtArgs> | null
    /**
     * Filter which suiviCours to delete.
     */
    where: suiviCoursWhereUniqueInput
  }

  /**
   * suiviCours deleteMany
   */
  export type suiviCoursDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which suiviCours to delete
     */
    where?: suiviCoursWhereInput
    /**
     * Limit how many suiviCours to delete.
     */
    limit?: number
  }

  /**
   * suiviCours without action
   */
  export type suiviCoursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suiviCours
     */
    select?: suiviCoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suiviCours
     */
    omit?: suiviCoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suiviCoursInclude<ExtArgs> | null
  }


  /**
   * Model cours
   */

  export type AggregateCours = {
    _count: CoursCountAggregateOutputType | null
    _avg: CoursAvgAggregateOutputType | null
    _sum: CoursSumAggregateOutputType | null
    _min: CoursMinAggregateOutputType | null
    _max: CoursMaxAggregateOutputType | null
  }

  export type CoursAvgAggregateOutputType = {
    id_cours: number | null
    id_formateur: number | null
  }

  export type CoursSumAggregateOutputType = {
    id_cours: number | null
    id_formateur: number | null
  }

  export type CoursMinAggregateOutputType = {
    id_cours: number | null
    categorie: string | null
    titre: string | null
    description: string | null
    photoCours: string | null
    dateCreation: Date | null
    id_formateur: number | null
  }

  export type CoursMaxAggregateOutputType = {
    id_cours: number | null
    categorie: string | null
    titre: string | null
    description: string | null
    photoCours: string | null
    dateCreation: Date | null
    id_formateur: number | null
  }

  export type CoursCountAggregateOutputType = {
    id_cours: number
    categorie: number
    titre: number
    description: number
    photoCours: number
    dateCreation: number
    id_formateur: number
    _all: number
  }


  export type CoursAvgAggregateInputType = {
    id_cours?: true
    id_formateur?: true
  }

  export type CoursSumAggregateInputType = {
    id_cours?: true
    id_formateur?: true
  }

  export type CoursMinAggregateInputType = {
    id_cours?: true
    categorie?: true
    titre?: true
    description?: true
    photoCours?: true
    dateCreation?: true
    id_formateur?: true
  }

  export type CoursMaxAggregateInputType = {
    id_cours?: true
    categorie?: true
    titre?: true
    description?: true
    photoCours?: true
    dateCreation?: true
    id_formateur?: true
  }

  export type CoursCountAggregateInputType = {
    id_cours?: true
    categorie?: true
    titre?: true
    description?: true
    photoCours?: true
    dateCreation?: true
    id_formateur?: true
    _all?: true
  }

  export type CoursAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cours to aggregate.
     */
    where?: coursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cours to fetch.
     */
    orderBy?: coursOrderByWithRelationInput | coursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: coursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cours
    **/
    _count?: true | CoursCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoursAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoursSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoursMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoursMaxAggregateInputType
  }

  export type GetCoursAggregateType<T extends CoursAggregateArgs> = {
        [P in keyof T & keyof AggregateCours]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCours[P]>
      : GetScalarType<T[P], AggregateCours[P]>
  }




  export type coursGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: coursWhereInput
    orderBy?: coursOrderByWithAggregationInput | coursOrderByWithAggregationInput[]
    by: CoursScalarFieldEnum[] | CoursScalarFieldEnum
    having?: coursScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoursCountAggregateInputType | true
    _avg?: CoursAvgAggregateInputType
    _sum?: CoursSumAggregateInputType
    _min?: CoursMinAggregateInputType
    _max?: CoursMaxAggregateInputType
  }

  export type CoursGroupByOutputType = {
    id_cours: number
    categorie: string
    titre: string
    description: string
    photoCours: string | null
    dateCreation: Date
    id_formateur: number
    _count: CoursCountAggregateOutputType | null
    _avg: CoursAvgAggregateOutputType | null
    _sum: CoursSumAggregateOutputType | null
    _min: CoursMinAggregateOutputType | null
    _max: CoursMaxAggregateOutputType | null
  }

  type GetCoursGroupByPayload<T extends coursGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoursGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoursGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoursGroupByOutputType[P]>
            : GetScalarType<T[P], CoursGroupByOutputType[P]>
        }
      >
    >


  export type coursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cours?: boolean
    categorie?: boolean
    titre?: boolean
    description?: boolean
    photoCours?: boolean
    dateCreation?: boolean
    id_formateur?: boolean
    formateur?: boolean | formateurDefaultArgs<ExtArgs>
    suiviCours?: boolean | cours$suiviCoursArgs<ExtArgs>
    chapitre?: boolean | cours$chapitreArgs<ExtArgs>
    _count?: boolean | CoursCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cours"]>

  export type coursSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cours?: boolean
    categorie?: boolean
    titre?: boolean
    description?: boolean
    photoCours?: boolean
    dateCreation?: boolean
    id_formateur?: boolean
    formateur?: boolean | formateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cours"]>

  export type coursSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cours?: boolean
    categorie?: boolean
    titre?: boolean
    description?: boolean
    photoCours?: boolean
    dateCreation?: boolean
    id_formateur?: boolean
    formateur?: boolean | formateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cours"]>

  export type coursSelectScalar = {
    id_cours?: boolean
    categorie?: boolean
    titre?: boolean
    description?: boolean
    photoCours?: boolean
    dateCreation?: boolean
    id_formateur?: boolean
  }

  export type coursOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_cours" | "categorie" | "titre" | "description" | "photoCours" | "dateCreation" | "id_formateur", ExtArgs["result"]["cours"]>
  export type coursInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formateur?: boolean | formateurDefaultArgs<ExtArgs>
    suiviCours?: boolean | cours$suiviCoursArgs<ExtArgs>
    chapitre?: boolean | cours$chapitreArgs<ExtArgs>
    _count?: boolean | CoursCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type coursIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formateur?: boolean | formateurDefaultArgs<ExtArgs>
  }
  export type coursIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formateur?: boolean | formateurDefaultArgs<ExtArgs>
  }

  export type $coursPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cours"
    objects: {
      formateur: Prisma.$formateurPayload<ExtArgs>
      suiviCours: Prisma.$suiviCoursPayload<ExtArgs>[]
      chapitre: Prisma.$chapitrePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_cours: number
      categorie: string
      titre: string
      description: string
      photoCours: string | null
      dateCreation: Date
      id_formateur: number
    }, ExtArgs["result"]["cours"]>
    composites: {}
  }

  type coursGetPayload<S extends boolean | null | undefined | coursDefaultArgs> = $Result.GetResult<Prisma.$coursPayload, S>

  type coursCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<coursFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoursCountAggregateInputType | true
    }

  export interface coursDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cours'], meta: { name: 'cours' } }
    /**
     * Find zero or one Cours that matches the filter.
     * @param {coursFindUniqueArgs} args - Arguments to find a Cours
     * @example
     * // Get one Cours
     * const cours = await prisma.cours.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends coursFindUniqueArgs>(args: SelectSubset<T, coursFindUniqueArgs<ExtArgs>>): Prisma__coursClient<$Result.GetResult<Prisma.$coursPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cours that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {coursFindUniqueOrThrowArgs} args - Arguments to find a Cours
     * @example
     * // Get one Cours
     * const cours = await prisma.cours.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends coursFindUniqueOrThrowArgs>(args: SelectSubset<T, coursFindUniqueOrThrowArgs<ExtArgs>>): Prisma__coursClient<$Result.GetResult<Prisma.$coursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coursFindFirstArgs} args - Arguments to find a Cours
     * @example
     * // Get one Cours
     * const cours = await prisma.cours.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends coursFindFirstArgs>(args?: SelectSubset<T, coursFindFirstArgs<ExtArgs>>): Prisma__coursClient<$Result.GetResult<Prisma.$coursPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cours that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coursFindFirstOrThrowArgs} args - Arguments to find a Cours
     * @example
     * // Get one Cours
     * const cours = await prisma.cours.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends coursFindFirstOrThrowArgs>(args?: SelectSubset<T, coursFindFirstOrThrowArgs<ExtArgs>>): Prisma__coursClient<$Result.GetResult<Prisma.$coursPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coursFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cours
     * const cours = await prisma.cours.findMany()
     * 
     * // Get first 10 Cours
     * const cours = await prisma.cours.findMany({ take: 10 })
     * 
     * // Only select the `id_cours`
     * const coursWithId_coursOnly = await prisma.cours.findMany({ select: { id_cours: true } })
     * 
     */
    findMany<T extends coursFindManyArgs>(args?: SelectSubset<T, coursFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cours.
     * @param {coursCreateArgs} args - Arguments to create a Cours.
     * @example
     * // Create one Cours
     * const Cours = await prisma.cours.create({
     *   data: {
     *     // ... data to create a Cours
     *   }
     * })
     * 
     */
    create<T extends coursCreateArgs>(args: SelectSubset<T, coursCreateArgs<ExtArgs>>): Prisma__coursClient<$Result.GetResult<Prisma.$coursPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cours.
     * @param {coursCreateManyArgs} args - Arguments to create many Cours.
     * @example
     * // Create many Cours
     * const cours = await prisma.cours.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends coursCreateManyArgs>(args?: SelectSubset<T, coursCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cours and returns the data saved in the database.
     * @param {coursCreateManyAndReturnArgs} args - Arguments to create many Cours.
     * @example
     * // Create many Cours
     * const cours = await prisma.cours.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cours and only return the `id_cours`
     * const coursWithId_coursOnly = await prisma.cours.createManyAndReturn({
     *   select: { id_cours: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends coursCreateManyAndReturnArgs>(args?: SelectSubset<T, coursCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cours.
     * @param {coursDeleteArgs} args - Arguments to delete one Cours.
     * @example
     * // Delete one Cours
     * const Cours = await prisma.cours.delete({
     *   where: {
     *     // ... filter to delete one Cours
     *   }
     * })
     * 
     */
    delete<T extends coursDeleteArgs>(args: SelectSubset<T, coursDeleteArgs<ExtArgs>>): Prisma__coursClient<$Result.GetResult<Prisma.$coursPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cours.
     * @param {coursUpdateArgs} args - Arguments to update one Cours.
     * @example
     * // Update one Cours
     * const cours = await prisma.cours.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends coursUpdateArgs>(args: SelectSubset<T, coursUpdateArgs<ExtArgs>>): Prisma__coursClient<$Result.GetResult<Prisma.$coursPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cours.
     * @param {coursDeleteManyArgs} args - Arguments to filter Cours to delete.
     * @example
     * // Delete a few Cours
     * const { count } = await prisma.cours.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends coursDeleteManyArgs>(args?: SelectSubset<T, coursDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coursUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cours
     * const cours = await prisma.cours.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends coursUpdateManyArgs>(args: SelectSubset<T, coursUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cours and returns the data updated in the database.
     * @param {coursUpdateManyAndReturnArgs} args - Arguments to update many Cours.
     * @example
     * // Update many Cours
     * const cours = await prisma.cours.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cours and only return the `id_cours`
     * const coursWithId_coursOnly = await prisma.cours.updateManyAndReturn({
     *   select: { id_cours: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends coursUpdateManyAndReturnArgs>(args: SelectSubset<T, coursUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cours.
     * @param {coursUpsertArgs} args - Arguments to update or create a Cours.
     * @example
     * // Update or create a Cours
     * const cours = await prisma.cours.upsert({
     *   create: {
     *     // ... data to create a Cours
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cours we want to update
     *   }
     * })
     */
    upsert<T extends coursUpsertArgs>(args: SelectSubset<T, coursUpsertArgs<ExtArgs>>): Prisma__coursClient<$Result.GetResult<Prisma.$coursPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coursCountArgs} args - Arguments to filter Cours to count.
     * @example
     * // Count the number of Cours
     * const count = await prisma.cours.count({
     *   where: {
     *     // ... the filter for the Cours we want to count
     *   }
     * })
    **/
    count<T extends coursCountArgs>(
      args?: Subset<T, coursCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoursCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoursAggregateArgs>(args: Subset<T, CoursAggregateArgs>): Prisma.PrismaPromise<GetCoursAggregateType<T>>

    /**
     * Group by Cours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coursGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends coursGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: coursGroupByArgs['orderBy'] }
        : { orderBy?: coursGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, coursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cours model
   */
  readonly fields: coursFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cours.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__coursClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    formateur<T extends formateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, formateurDefaultArgs<ExtArgs>>): Prisma__formateurClient<$Result.GetResult<Prisma.$formateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    suiviCours<T extends cours$suiviCoursArgs<ExtArgs> = {}>(args?: Subset<T, cours$suiviCoursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$suiviCoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chapitre<T extends cours$chapitreArgs<ExtArgs> = {}>(args?: Subset<T, cours$chapitreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chapitrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cours model
   */
  interface coursFieldRefs {
    readonly id_cours: FieldRef<"cours", 'Int'>
    readonly categorie: FieldRef<"cours", 'String'>
    readonly titre: FieldRef<"cours", 'String'>
    readonly description: FieldRef<"cours", 'String'>
    readonly photoCours: FieldRef<"cours", 'String'>
    readonly dateCreation: FieldRef<"cours", 'DateTime'>
    readonly id_formateur: FieldRef<"cours", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * cours findUnique
   */
  export type coursFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cours
     */
    select?: coursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cours
     */
    omit?: coursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursInclude<ExtArgs> | null
    /**
     * Filter, which cours to fetch.
     */
    where: coursWhereUniqueInput
  }

  /**
   * cours findUniqueOrThrow
   */
  export type coursFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cours
     */
    select?: coursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cours
     */
    omit?: coursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursInclude<ExtArgs> | null
    /**
     * Filter, which cours to fetch.
     */
    where: coursWhereUniqueInput
  }

  /**
   * cours findFirst
   */
  export type coursFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cours
     */
    select?: coursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cours
     */
    omit?: coursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursInclude<ExtArgs> | null
    /**
     * Filter, which cours to fetch.
     */
    where?: coursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cours to fetch.
     */
    orderBy?: coursOrderByWithRelationInput | coursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cours.
     */
    cursor?: coursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cours.
     */
    distinct?: CoursScalarFieldEnum | CoursScalarFieldEnum[]
  }

  /**
   * cours findFirstOrThrow
   */
  export type coursFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cours
     */
    select?: coursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cours
     */
    omit?: coursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursInclude<ExtArgs> | null
    /**
     * Filter, which cours to fetch.
     */
    where?: coursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cours to fetch.
     */
    orderBy?: coursOrderByWithRelationInput | coursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cours.
     */
    cursor?: coursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cours.
     */
    distinct?: CoursScalarFieldEnum | CoursScalarFieldEnum[]
  }

  /**
   * cours findMany
   */
  export type coursFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cours
     */
    select?: coursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cours
     */
    omit?: coursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursInclude<ExtArgs> | null
    /**
     * Filter, which cours to fetch.
     */
    where?: coursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cours to fetch.
     */
    orderBy?: coursOrderByWithRelationInput | coursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cours.
     */
    cursor?: coursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cours.
     */
    skip?: number
    distinct?: CoursScalarFieldEnum | CoursScalarFieldEnum[]
  }

  /**
   * cours create
   */
  export type coursCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cours
     */
    select?: coursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cours
     */
    omit?: coursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursInclude<ExtArgs> | null
    /**
     * The data needed to create a cours.
     */
    data: XOR<coursCreateInput, coursUncheckedCreateInput>
  }

  /**
   * cours createMany
   */
  export type coursCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cours.
     */
    data: coursCreateManyInput | coursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cours createManyAndReturn
   */
  export type coursCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cours
     */
    select?: coursSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cours
     */
    omit?: coursOmit<ExtArgs> | null
    /**
     * The data used to create many cours.
     */
    data: coursCreateManyInput | coursCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * cours update
   */
  export type coursUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cours
     */
    select?: coursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cours
     */
    omit?: coursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursInclude<ExtArgs> | null
    /**
     * The data needed to update a cours.
     */
    data: XOR<coursUpdateInput, coursUncheckedUpdateInput>
    /**
     * Choose, which cours to update.
     */
    where: coursWhereUniqueInput
  }

  /**
   * cours updateMany
   */
  export type coursUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cours.
     */
    data: XOR<coursUpdateManyMutationInput, coursUncheckedUpdateManyInput>
    /**
     * Filter which cours to update
     */
    where?: coursWhereInput
    /**
     * Limit how many cours to update.
     */
    limit?: number
  }

  /**
   * cours updateManyAndReturn
   */
  export type coursUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cours
     */
    select?: coursSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cours
     */
    omit?: coursOmit<ExtArgs> | null
    /**
     * The data used to update cours.
     */
    data: XOR<coursUpdateManyMutationInput, coursUncheckedUpdateManyInput>
    /**
     * Filter which cours to update
     */
    where?: coursWhereInput
    /**
     * Limit how many cours to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * cours upsert
   */
  export type coursUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cours
     */
    select?: coursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cours
     */
    omit?: coursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursInclude<ExtArgs> | null
    /**
     * The filter to search for the cours to update in case it exists.
     */
    where: coursWhereUniqueInput
    /**
     * In case the cours found by the `where` argument doesn't exist, create a new cours with this data.
     */
    create: XOR<coursCreateInput, coursUncheckedCreateInput>
    /**
     * In case the cours was found with the provided `where` argument, update it with this data.
     */
    update: XOR<coursUpdateInput, coursUncheckedUpdateInput>
  }

  /**
   * cours delete
   */
  export type coursDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cours
     */
    select?: coursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cours
     */
    omit?: coursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursInclude<ExtArgs> | null
    /**
     * Filter which cours to delete.
     */
    where: coursWhereUniqueInput
  }

  /**
   * cours deleteMany
   */
  export type coursDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cours to delete
     */
    where?: coursWhereInput
    /**
     * Limit how many cours to delete.
     */
    limit?: number
  }

  /**
   * cours.suiviCours
   */
  export type cours$suiviCoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suiviCours
     */
    select?: suiviCoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suiviCours
     */
    omit?: suiviCoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suiviCoursInclude<ExtArgs> | null
    where?: suiviCoursWhereInput
    orderBy?: suiviCoursOrderByWithRelationInput | suiviCoursOrderByWithRelationInput[]
    cursor?: suiviCoursWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SuiviCoursScalarFieldEnum | SuiviCoursScalarFieldEnum[]
  }

  /**
   * cours.chapitre
   */
  export type cours$chapitreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapitre
     */
    select?: chapitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapitre
     */
    omit?: chapitreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapitreInclude<ExtArgs> | null
    where?: chapitreWhereInput
    orderBy?: chapitreOrderByWithRelationInput | chapitreOrderByWithRelationInput[]
    cursor?: chapitreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChapitreScalarFieldEnum | ChapitreScalarFieldEnum[]
  }

  /**
   * cours without action
   */
  export type coursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cours
     */
    select?: coursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cours
     */
    omit?: coursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursInclude<ExtArgs> | null
  }


  /**
   * Model chapitre
   */

  export type AggregateChapitre = {
    _count: ChapitreCountAggregateOutputType | null
    _avg: ChapitreAvgAggregateOutputType | null
    _sum: ChapitreSumAggregateOutputType | null
    _min: ChapitreMinAggregateOutputType | null
    _max: ChapitreMaxAggregateOutputType | null
  }

  export type ChapitreAvgAggregateOutputType = {
    id_chapitre: number | null
    numeroOrdre: number | null
    id_cours: number | null
  }

  export type ChapitreSumAggregateOutputType = {
    id_chapitre: number | null
    numeroOrdre: number | null
    id_cours: number | null
  }

  export type ChapitreMinAggregateOutputType = {
    id_chapitre: number | null
    titre: string | null
    numeroOrdre: number | null
    id_cours: number | null
  }

  export type ChapitreMaxAggregateOutputType = {
    id_chapitre: number | null
    titre: string | null
    numeroOrdre: number | null
    id_cours: number | null
  }

  export type ChapitreCountAggregateOutputType = {
    id_chapitre: number
    titre: number
    numeroOrdre: number
    id_cours: number
    _all: number
  }


  export type ChapitreAvgAggregateInputType = {
    id_chapitre?: true
    numeroOrdre?: true
    id_cours?: true
  }

  export type ChapitreSumAggregateInputType = {
    id_chapitre?: true
    numeroOrdre?: true
    id_cours?: true
  }

  export type ChapitreMinAggregateInputType = {
    id_chapitre?: true
    titre?: true
    numeroOrdre?: true
    id_cours?: true
  }

  export type ChapitreMaxAggregateInputType = {
    id_chapitre?: true
    titre?: true
    numeroOrdre?: true
    id_cours?: true
  }

  export type ChapitreCountAggregateInputType = {
    id_chapitre?: true
    titre?: true
    numeroOrdre?: true
    id_cours?: true
    _all?: true
  }

  export type ChapitreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chapitre to aggregate.
     */
    where?: chapitreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chapitres to fetch.
     */
    orderBy?: chapitreOrderByWithRelationInput | chapitreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chapitreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chapitres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chapitres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chapitres
    **/
    _count?: true | ChapitreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChapitreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChapitreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChapitreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChapitreMaxAggregateInputType
  }

  export type GetChapitreAggregateType<T extends ChapitreAggregateArgs> = {
        [P in keyof T & keyof AggregateChapitre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChapitre[P]>
      : GetScalarType<T[P], AggregateChapitre[P]>
  }




  export type chapitreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chapitreWhereInput
    orderBy?: chapitreOrderByWithAggregationInput | chapitreOrderByWithAggregationInput[]
    by: ChapitreScalarFieldEnum[] | ChapitreScalarFieldEnum
    having?: chapitreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChapitreCountAggregateInputType | true
    _avg?: ChapitreAvgAggregateInputType
    _sum?: ChapitreSumAggregateInputType
    _min?: ChapitreMinAggregateInputType
    _max?: ChapitreMaxAggregateInputType
  }

  export type ChapitreGroupByOutputType = {
    id_chapitre: number
    titre: string
    numeroOrdre: number
    id_cours: number
    _count: ChapitreCountAggregateOutputType | null
    _avg: ChapitreAvgAggregateOutputType | null
    _sum: ChapitreSumAggregateOutputType | null
    _min: ChapitreMinAggregateOutputType | null
    _max: ChapitreMaxAggregateOutputType | null
  }

  type GetChapitreGroupByPayload<T extends chapitreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChapitreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChapitreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChapitreGroupByOutputType[P]>
            : GetScalarType<T[P], ChapitreGroupByOutputType[P]>
        }
      >
    >


  export type chapitreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_chapitre?: boolean
    titre?: boolean
    numeroOrdre?: boolean
    id_cours?: boolean
    cours?: boolean | coursDefaultArgs<ExtArgs>
    lecon?: boolean | chapitre$leconArgs<ExtArgs>
    _count?: boolean | ChapitreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapitre"]>

  export type chapitreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_chapitre?: boolean
    titre?: boolean
    numeroOrdre?: boolean
    id_cours?: boolean
    cours?: boolean | coursDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapitre"]>

  export type chapitreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_chapitre?: boolean
    titre?: boolean
    numeroOrdre?: boolean
    id_cours?: boolean
    cours?: boolean | coursDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapitre"]>

  export type chapitreSelectScalar = {
    id_chapitre?: boolean
    titre?: boolean
    numeroOrdre?: boolean
    id_cours?: boolean
  }

  export type chapitreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_chapitre" | "titre" | "numeroOrdre" | "id_cours", ExtArgs["result"]["chapitre"]>
  export type chapitreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cours?: boolean | coursDefaultArgs<ExtArgs>
    lecon?: boolean | chapitre$leconArgs<ExtArgs>
    _count?: boolean | ChapitreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type chapitreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cours?: boolean | coursDefaultArgs<ExtArgs>
  }
  export type chapitreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cours?: boolean | coursDefaultArgs<ExtArgs>
  }

  export type $chapitrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chapitre"
    objects: {
      cours: Prisma.$coursPayload<ExtArgs>
      lecon: Prisma.$leconPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_chapitre: number
      titre: string
      numeroOrdre: number
      id_cours: number
    }, ExtArgs["result"]["chapitre"]>
    composites: {}
  }

  type chapitreGetPayload<S extends boolean | null | undefined | chapitreDefaultArgs> = $Result.GetResult<Prisma.$chapitrePayload, S>

  type chapitreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chapitreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChapitreCountAggregateInputType | true
    }

  export interface chapitreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chapitre'], meta: { name: 'chapitre' } }
    /**
     * Find zero or one Chapitre that matches the filter.
     * @param {chapitreFindUniqueArgs} args - Arguments to find a Chapitre
     * @example
     * // Get one Chapitre
     * const chapitre = await prisma.chapitre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chapitreFindUniqueArgs>(args: SelectSubset<T, chapitreFindUniqueArgs<ExtArgs>>): Prisma__chapitreClient<$Result.GetResult<Prisma.$chapitrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chapitre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chapitreFindUniqueOrThrowArgs} args - Arguments to find a Chapitre
     * @example
     * // Get one Chapitre
     * const chapitre = await prisma.chapitre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chapitreFindUniqueOrThrowArgs>(args: SelectSubset<T, chapitreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chapitreClient<$Result.GetResult<Prisma.$chapitrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapitre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chapitreFindFirstArgs} args - Arguments to find a Chapitre
     * @example
     * // Get one Chapitre
     * const chapitre = await prisma.chapitre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chapitreFindFirstArgs>(args?: SelectSubset<T, chapitreFindFirstArgs<ExtArgs>>): Prisma__chapitreClient<$Result.GetResult<Prisma.$chapitrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapitre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chapitreFindFirstOrThrowArgs} args - Arguments to find a Chapitre
     * @example
     * // Get one Chapitre
     * const chapitre = await prisma.chapitre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chapitreFindFirstOrThrowArgs>(args?: SelectSubset<T, chapitreFindFirstOrThrowArgs<ExtArgs>>): Prisma__chapitreClient<$Result.GetResult<Prisma.$chapitrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chapitres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chapitreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chapitres
     * const chapitres = await prisma.chapitre.findMany()
     * 
     * // Get first 10 Chapitres
     * const chapitres = await prisma.chapitre.findMany({ take: 10 })
     * 
     * // Only select the `id_chapitre`
     * const chapitreWithId_chapitreOnly = await prisma.chapitre.findMany({ select: { id_chapitre: true } })
     * 
     */
    findMany<T extends chapitreFindManyArgs>(args?: SelectSubset<T, chapitreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chapitrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chapitre.
     * @param {chapitreCreateArgs} args - Arguments to create a Chapitre.
     * @example
     * // Create one Chapitre
     * const Chapitre = await prisma.chapitre.create({
     *   data: {
     *     // ... data to create a Chapitre
     *   }
     * })
     * 
     */
    create<T extends chapitreCreateArgs>(args: SelectSubset<T, chapitreCreateArgs<ExtArgs>>): Prisma__chapitreClient<$Result.GetResult<Prisma.$chapitrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chapitres.
     * @param {chapitreCreateManyArgs} args - Arguments to create many Chapitres.
     * @example
     * // Create many Chapitres
     * const chapitre = await prisma.chapitre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chapitreCreateManyArgs>(args?: SelectSubset<T, chapitreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chapitres and returns the data saved in the database.
     * @param {chapitreCreateManyAndReturnArgs} args - Arguments to create many Chapitres.
     * @example
     * // Create many Chapitres
     * const chapitre = await prisma.chapitre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chapitres and only return the `id_chapitre`
     * const chapitreWithId_chapitreOnly = await prisma.chapitre.createManyAndReturn({
     *   select: { id_chapitre: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends chapitreCreateManyAndReturnArgs>(args?: SelectSubset<T, chapitreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chapitrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chapitre.
     * @param {chapitreDeleteArgs} args - Arguments to delete one Chapitre.
     * @example
     * // Delete one Chapitre
     * const Chapitre = await prisma.chapitre.delete({
     *   where: {
     *     // ... filter to delete one Chapitre
     *   }
     * })
     * 
     */
    delete<T extends chapitreDeleteArgs>(args: SelectSubset<T, chapitreDeleteArgs<ExtArgs>>): Prisma__chapitreClient<$Result.GetResult<Prisma.$chapitrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chapitre.
     * @param {chapitreUpdateArgs} args - Arguments to update one Chapitre.
     * @example
     * // Update one Chapitre
     * const chapitre = await prisma.chapitre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chapitreUpdateArgs>(args: SelectSubset<T, chapitreUpdateArgs<ExtArgs>>): Prisma__chapitreClient<$Result.GetResult<Prisma.$chapitrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chapitres.
     * @param {chapitreDeleteManyArgs} args - Arguments to filter Chapitres to delete.
     * @example
     * // Delete a few Chapitres
     * const { count } = await prisma.chapitre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chapitreDeleteManyArgs>(args?: SelectSubset<T, chapitreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chapitres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chapitreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chapitres
     * const chapitre = await prisma.chapitre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chapitreUpdateManyArgs>(args: SelectSubset<T, chapitreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chapitres and returns the data updated in the database.
     * @param {chapitreUpdateManyAndReturnArgs} args - Arguments to update many Chapitres.
     * @example
     * // Update many Chapitres
     * const chapitre = await prisma.chapitre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chapitres and only return the `id_chapitre`
     * const chapitreWithId_chapitreOnly = await prisma.chapitre.updateManyAndReturn({
     *   select: { id_chapitre: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends chapitreUpdateManyAndReturnArgs>(args: SelectSubset<T, chapitreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chapitrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chapitre.
     * @param {chapitreUpsertArgs} args - Arguments to update or create a Chapitre.
     * @example
     * // Update or create a Chapitre
     * const chapitre = await prisma.chapitre.upsert({
     *   create: {
     *     // ... data to create a Chapitre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chapitre we want to update
     *   }
     * })
     */
    upsert<T extends chapitreUpsertArgs>(args: SelectSubset<T, chapitreUpsertArgs<ExtArgs>>): Prisma__chapitreClient<$Result.GetResult<Prisma.$chapitrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chapitres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chapitreCountArgs} args - Arguments to filter Chapitres to count.
     * @example
     * // Count the number of Chapitres
     * const count = await prisma.chapitre.count({
     *   where: {
     *     // ... the filter for the Chapitres we want to count
     *   }
     * })
    **/
    count<T extends chapitreCountArgs>(
      args?: Subset<T, chapitreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChapitreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chapitre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapitreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChapitreAggregateArgs>(args: Subset<T, ChapitreAggregateArgs>): Prisma.PrismaPromise<GetChapitreAggregateType<T>>

    /**
     * Group by Chapitre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chapitreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends chapitreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chapitreGroupByArgs['orderBy'] }
        : { orderBy?: chapitreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, chapitreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChapitreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chapitre model
   */
  readonly fields: chapitreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chapitre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chapitreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cours<T extends coursDefaultArgs<ExtArgs> = {}>(args?: Subset<T, coursDefaultArgs<ExtArgs>>): Prisma__coursClient<$Result.GetResult<Prisma.$coursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lecon<T extends chapitre$leconArgs<ExtArgs> = {}>(args?: Subset<T, chapitre$leconArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leconPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the chapitre model
   */
  interface chapitreFieldRefs {
    readonly id_chapitre: FieldRef<"chapitre", 'Int'>
    readonly titre: FieldRef<"chapitre", 'String'>
    readonly numeroOrdre: FieldRef<"chapitre", 'Int'>
    readonly id_cours: FieldRef<"chapitre", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * chapitre findUnique
   */
  export type chapitreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapitre
     */
    select?: chapitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapitre
     */
    omit?: chapitreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapitreInclude<ExtArgs> | null
    /**
     * Filter, which chapitre to fetch.
     */
    where: chapitreWhereUniqueInput
  }

  /**
   * chapitre findUniqueOrThrow
   */
  export type chapitreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapitre
     */
    select?: chapitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapitre
     */
    omit?: chapitreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapitreInclude<ExtArgs> | null
    /**
     * Filter, which chapitre to fetch.
     */
    where: chapitreWhereUniqueInput
  }

  /**
   * chapitre findFirst
   */
  export type chapitreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapitre
     */
    select?: chapitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapitre
     */
    omit?: chapitreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapitreInclude<ExtArgs> | null
    /**
     * Filter, which chapitre to fetch.
     */
    where?: chapitreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chapitres to fetch.
     */
    orderBy?: chapitreOrderByWithRelationInput | chapitreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chapitres.
     */
    cursor?: chapitreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chapitres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chapitres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chapitres.
     */
    distinct?: ChapitreScalarFieldEnum | ChapitreScalarFieldEnum[]
  }

  /**
   * chapitre findFirstOrThrow
   */
  export type chapitreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapitre
     */
    select?: chapitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapitre
     */
    omit?: chapitreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapitreInclude<ExtArgs> | null
    /**
     * Filter, which chapitre to fetch.
     */
    where?: chapitreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chapitres to fetch.
     */
    orderBy?: chapitreOrderByWithRelationInput | chapitreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chapitres.
     */
    cursor?: chapitreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chapitres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chapitres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chapitres.
     */
    distinct?: ChapitreScalarFieldEnum | ChapitreScalarFieldEnum[]
  }

  /**
   * chapitre findMany
   */
  export type chapitreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapitre
     */
    select?: chapitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapitre
     */
    omit?: chapitreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapitreInclude<ExtArgs> | null
    /**
     * Filter, which chapitres to fetch.
     */
    where?: chapitreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chapitres to fetch.
     */
    orderBy?: chapitreOrderByWithRelationInput | chapitreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chapitres.
     */
    cursor?: chapitreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chapitres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chapitres.
     */
    skip?: number
    distinct?: ChapitreScalarFieldEnum | ChapitreScalarFieldEnum[]
  }

  /**
   * chapitre create
   */
  export type chapitreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapitre
     */
    select?: chapitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapitre
     */
    omit?: chapitreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapitreInclude<ExtArgs> | null
    /**
     * The data needed to create a chapitre.
     */
    data: XOR<chapitreCreateInput, chapitreUncheckedCreateInput>
  }

  /**
   * chapitre createMany
   */
  export type chapitreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chapitres.
     */
    data: chapitreCreateManyInput | chapitreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chapitre createManyAndReturn
   */
  export type chapitreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapitre
     */
    select?: chapitreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chapitre
     */
    omit?: chapitreOmit<ExtArgs> | null
    /**
     * The data used to create many chapitres.
     */
    data: chapitreCreateManyInput | chapitreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapitreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * chapitre update
   */
  export type chapitreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapitre
     */
    select?: chapitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapitre
     */
    omit?: chapitreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapitreInclude<ExtArgs> | null
    /**
     * The data needed to update a chapitre.
     */
    data: XOR<chapitreUpdateInput, chapitreUncheckedUpdateInput>
    /**
     * Choose, which chapitre to update.
     */
    where: chapitreWhereUniqueInput
  }

  /**
   * chapitre updateMany
   */
  export type chapitreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chapitres.
     */
    data: XOR<chapitreUpdateManyMutationInput, chapitreUncheckedUpdateManyInput>
    /**
     * Filter which chapitres to update
     */
    where?: chapitreWhereInput
    /**
     * Limit how many chapitres to update.
     */
    limit?: number
  }

  /**
   * chapitre updateManyAndReturn
   */
  export type chapitreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapitre
     */
    select?: chapitreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chapitre
     */
    omit?: chapitreOmit<ExtArgs> | null
    /**
     * The data used to update chapitres.
     */
    data: XOR<chapitreUpdateManyMutationInput, chapitreUncheckedUpdateManyInput>
    /**
     * Filter which chapitres to update
     */
    where?: chapitreWhereInput
    /**
     * Limit how many chapitres to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapitreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * chapitre upsert
   */
  export type chapitreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapitre
     */
    select?: chapitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapitre
     */
    omit?: chapitreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapitreInclude<ExtArgs> | null
    /**
     * The filter to search for the chapitre to update in case it exists.
     */
    where: chapitreWhereUniqueInput
    /**
     * In case the chapitre found by the `where` argument doesn't exist, create a new chapitre with this data.
     */
    create: XOR<chapitreCreateInput, chapitreUncheckedCreateInput>
    /**
     * In case the chapitre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chapitreUpdateInput, chapitreUncheckedUpdateInput>
  }

  /**
   * chapitre delete
   */
  export type chapitreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapitre
     */
    select?: chapitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapitre
     */
    omit?: chapitreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapitreInclude<ExtArgs> | null
    /**
     * Filter which chapitre to delete.
     */
    where: chapitreWhereUniqueInput
  }

  /**
   * chapitre deleteMany
   */
  export type chapitreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chapitres to delete
     */
    where?: chapitreWhereInput
    /**
     * Limit how many chapitres to delete.
     */
    limit?: number
  }

  /**
   * chapitre.lecon
   */
  export type chapitre$leconArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecon
     */
    select?: leconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecon
     */
    omit?: leconOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leconInclude<ExtArgs> | null
    where?: leconWhereInput
    orderBy?: leconOrderByWithRelationInput | leconOrderByWithRelationInput[]
    cursor?: leconWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeconScalarFieldEnum | LeconScalarFieldEnum[]
  }

  /**
   * chapitre without action
   */
  export type chapitreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapitre
     */
    select?: chapitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapitre
     */
    omit?: chapitreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapitreInclude<ExtArgs> | null
  }


  /**
   * Model lecon
   */

  export type AggregateLecon = {
    _count: LeconCountAggregateOutputType | null
    _avg: LeconAvgAggregateOutputType | null
    _sum: LeconSumAggregateOutputType | null
    _min: LeconMinAggregateOutputType | null
    _max: LeconMaxAggregateOutputType | null
  }

  export type LeconAvgAggregateOutputType = {
    id_lecon: number | null
    numeroOrdre: number | null
    id_chapitre: number | null
  }

  export type LeconSumAggregateOutputType = {
    id_lecon: number | null
    numeroOrdre: number | null
    id_chapitre: number | null
  }

  export type LeconMinAggregateOutputType = {
    id_lecon: number | null
    titre: string | null
    contenuTextuel: string | null
    contenuVideo: string | null
    numeroOrdre: number | null
    id_chapitre: number | null
  }

  export type LeconMaxAggregateOutputType = {
    id_lecon: number | null
    titre: string | null
    contenuTextuel: string | null
    contenuVideo: string | null
    numeroOrdre: number | null
    id_chapitre: number | null
  }

  export type LeconCountAggregateOutputType = {
    id_lecon: number
    titre: number
    contenuTextuel: number
    contenuVideo: number
    numeroOrdre: number
    id_chapitre: number
    _all: number
  }


  export type LeconAvgAggregateInputType = {
    id_lecon?: true
    numeroOrdre?: true
    id_chapitre?: true
  }

  export type LeconSumAggregateInputType = {
    id_lecon?: true
    numeroOrdre?: true
    id_chapitre?: true
  }

  export type LeconMinAggregateInputType = {
    id_lecon?: true
    titre?: true
    contenuTextuel?: true
    contenuVideo?: true
    numeroOrdre?: true
    id_chapitre?: true
  }

  export type LeconMaxAggregateInputType = {
    id_lecon?: true
    titre?: true
    contenuTextuel?: true
    contenuVideo?: true
    numeroOrdre?: true
    id_chapitre?: true
  }

  export type LeconCountAggregateInputType = {
    id_lecon?: true
    titre?: true
    contenuTextuel?: true
    contenuVideo?: true
    numeroOrdre?: true
    id_chapitre?: true
    _all?: true
  }

  export type LeconAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lecon to aggregate.
     */
    where?: leconWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lecons to fetch.
     */
    orderBy?: leconOrderByWithRelationInput | leconOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: leconWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lecons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lecons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lecons
    **/
    _count?: true | LeconCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeconAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeconSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeconMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeconMaxAggregateInputType
  }

  export type GetLeconAggregateType<T extends LeconAggregateArgs> = {
        [P in keyof T & keyof AggregateLecon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLecon[P]>
      : GetScalarType<T[P], AggregateLecon[P]>
  }




  export type leconGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leconWhereInput
    orderBy?: leconOrderByWithAggregationInput | leconOrderByWithAggregationInput[]
    by: LeconScalarFieldEnum[] | LeconScalarFieldEnum
    having?: leconScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeconCountAggregateInputType | true
    _avg?: LeconAvgAggregateInputType
    _sum?: LeconSumAggregateInputType
    _min?: LeconMinAggregateInputType
    _max?: LeconMaxAggregateInputType
  }

  export type LeconGroupByOutputType = {
    id_lecon: number
    titre: string
    contenuTextuel: string | null
    contenuVideo: string | null
    numeroOrdre: number
    id_chapitre: number
    _count: LeconCountAggregateOutputType | null
    _avg: LeconAvgAggregateOutputType | null
    _sum: LeconSumAggregateOutputType | null
    _min: LeconMinAggregateOutputType | null
    _max: LeconMaxAggregateOutputType | null
  }

  type GetLeconGroupByPayload<T extends leconGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeconGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeconGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeconGroupByOutputType[P]>
            : GetScalarType<T[P], LeconGroupByOutputType[P]>
        }
      >
    >


  export type leconSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_lecon?: boolean
    titre?: boolean
    contenuTextuel?: boolean
    contenuVideo?: boolean
    numeroOrdre?: boolean
    id_chapitre?: boolean
    chapitre?: boolean | chapitreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lecon"]>

  export type leconSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_lecon?: boolean
    titre?: boolean
    contenuTextuel?: boolean
    contenuVideo?: boolean
    numeroOrdre?: boolean
    id_chapitre?: boolean
    chapitre?: boolean | chapitreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lecon"]>

  export type leconSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_lecon?: boolean
    titre?: boolean
    contenuTextuel?: boolean
    contenuVideo?: boolean
    numeroOrdre?: boolean
    id_chapitre?: boolean
    chapitre?: boolean | chapitreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lecon"]>

  export type leconSelectScalar = {
    id_lecon?: boolean
    titre?: boolean
    contenuTextuel?: boolean
    contenuVideo?: boolean
    numeroOrdre?: boolean
    id_chapitre?: boolean
  }

  export type leconOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_lecon" | "titre" | "contenuTextuel" | "contenuVideo" | "numeroOrdre" | "id_chapitre", ExtArgs["result"]["lecon"]>
  export type leconInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapitre?: boolean | chapitreDefaultArgs<ExtArgs>
  }
  export type leconIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapitre?: boolean | chapitreDefaultArgs<ExtArgs>
  }
  export type leconIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapitre?: boolean | chapitreDefaultArgs<ExtArgs>
  }

  export type $leconPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "lecon"
    objects: {
      chapitre: Prisma.$chapitrePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_lecon: number
      titre: string
      contenuTextuel: string | null
      contenuVideo: string | null
      numeroOrdre: number
      id_chapitre: number
    }, ExtArgs["result"]["lecon"]>
    composites: {}
  }

  type leconGetPayload<S extends boolean | null | undefined | leconDefaultArgs> = $Result.GetResult<Prisma.$leconPayload, S>

  type leconCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<leconFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeconCountAggregateInputType | true
    }

  export interface leconDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lecon'], meta: { name: 'lecon' } }
    /**
     * Find zero or one Lecon that matches the filter.
     * @param {leconFindUniqueArgs} args - Arguments to find a Lecon
     * @example
     * // Get one Lecon
     * const lecon = await prisma.lecon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends leconFindUniqueArgs>(args: SelectSubset<T, leconFindUniqueArgs<ExtArgs>>): Prisma__leconClient<$Result.GetResult<Prisma.$leconPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lecon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {leconFindUniqueOrThrowArgs} args - Arguments to find a Lecon
     * @example
     * // Get one Lecon
     * const lecon = await prisma.lecon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends leconFindUniqueOrThrowArgs>(args: SelectSubset<T, leconFindUniqueOrThrowArgs<ExtArgs>>): Prisma__leconClient<$Result.GetResult<Prisma.$leconPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lecon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leconFindFirstArgs} args - Arguments to find a Lecon
     * @example
     * // Get one Lecon
     * const lecon = await prisma.lecon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends leconFindFirstArgs>(args?: SelectSubset<T, leconFindFirstArgs<ExtArgs>>): Prisma__leconClient<$Result.GetResult<Prisma.$leconPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lecon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leconFindFirstOrThrowArgs} args - Arguments to find a Lecon
     * @example
     * // Get one Lecon
     * const lecon = await prisma.lecon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends leconFindFirstOrThrowArgs>(args?: SelectSubset<T, leconFindFirstOrThrowArgs<ExtArgs>>): Prisma__leconClient<$Result.GetResult<Prisma.$leconPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lecons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leconFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lecons
     * const lecons = await prisma.lecon.findMany()
     * 
     * // Get first 10 Lecons
     * const lecons = await prisma.lecon.findMany({ take: 10 })
     * 
     * // Only select the `id_lecon`
     * const leconWithId_leconOnly = await prisma.lecon.findMany({ select: { id_lecon: true } })
     * 
     */
    findMany<T extends leconFindManyArgs>(args?: SelectSubset<T, leconFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leconPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lecon.
     * @param {leconCreateArgs} args - Arguments to create a Lecon.
     * @example
     * // Create one Lecon
     * const Lecon = await prisma.lecon.create({
     *   data: {
     *     // ... data to create a Lecon
     *   }
     * })
     * 
     */
    create<T extends leconCreateArgs>(args: SelectSubset<T, leconCreateArgs<ExtArgs>>): Prisma__leconClient<$Result.GetResult<Prisma.$leconPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lecons.
     * @param {leconCreateManyArgs} args - Arguments to create many Lecons.
     * @example
     * // Create many Lecons
     * const lecon = await prisma.lecon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends leconCreateManyArgs>(args?: SelectSubset<T, leconCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lecons and returns the data saved in the database.
     * @param {leconCreateManyAndReturnArgs} args - Arguments to create many Lecons.
     * @example
     * // Create many Lecons
     * const lecon = await prisma.lecon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lecons and only return the `id_lecon`
     * const leconWithId_leconOnly = await prisma.lecon.createManyAndReturn({
     *   select: { id_lecon: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends leconCreateManyAndReturnArgs>(args?: SelectSubset<T, leconCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leconPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lecon.
     * @param {leconDeleteArgs} args - Arguments to delete one Lecon.
     * @example
     * // Delete one Lecon
     * const Lecon = await prisma.lecon.delete({
     *   where: {
     *     // ... filter to delete one Lecon
     *   }
     * })
     * 
     */
    delete<T extends leconDeleteArgs>(args: SelectSubset<T, leconDeleteArgs<ExtArgs>>): Prisma__leconClient<$Result.GetResult<Prisma.$leconPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lecon.
     * @param {leconUpdateArgs} args - Arguments to update one Lecon.
     * @example
     * // Update one Lecon
     * const lecon = await prisma.lecon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends leconUpdateArgs>(args: SelectSubset<T, leconUpdateArgs<ExtArgs>>): Prisma__leconClient<$Result.GetResult<Prisma.$leconPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lecons.
     * @param {leconDeleteManyArgs} args - Arguments to filter Lecons to delete.
     * @example
     * // Delete a few Lecons
     * const { count } = await prisma.lecon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends leconDeleteManyArgs>(args?: SelectSubset<T, leconDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lecons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leconUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lecons
     * const lecon = await prisma.lecon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends leconUpdateManyArgs>(args: SelectSubset<T, leconUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lecons and returns the data updated in the database.
     * @param {leconUpdateManyAndReturnArgs} args - Arguments to update many Lecons.
     * @example
     * // Update many Lecons
     * const lecon = await prisma.lecon.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lecons and only return the `id_lecon`
     * const leconWithId_leconOnly = await prisma.lecon.updateManyAndReturn({
     *   select: { id_lecon: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends leconUpdateManyAndReturnArgs>(args: SelectSubset<T, leconUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leconPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lecon.
     * @param {leconUpsertArgs} args - Arguments to update or create a Lecon.
     * @example
     * // Update or create a Lecon
     * const lecon = await prisma.lecon.upsert({
     *   create: {
     *     // ... data to create a Lecon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lecon we want to update
     *   }
     * })
     */
    upsert<T extends leconUpsertArgs>(args: SelectSubset<T, leconUpsertArgs<ExtArgs>>): Prisma__leconClient<$Result.GetResult<Prisma.$leconPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lecons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leconCountArgs} args - Arguments to filter Lecons to count.
     * @example
     * // Count the number of Lecons
     * const count = await prisma.lecon.count({
     *   where: {
     *     // ... the filter for the Lecons we want to count
     *   }
     * })
    **/
    count<T extends leconCountArgs>(
      args?: Subset<T, leconCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeconCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lecon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeconAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeconAggregateArgs>(args: Subset<T, LeconAggregateArgs>): Prisma.PrismaPromise<GetLeconAggregateType<T>>

    /**
     * Group by Lecon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leconGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends leconGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: leconGroupByArgs['orderBy'] }
        : { orderBy?: leconGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, leconGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeconGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the lecon model
   */
  readonly fields: leconFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lecon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__leconClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chapitre<T extends chapitreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, chapitreDefaultArgs<ExtArgs>>): Prisma__chapitreClient<$Result.GetResult<Prisma.$chapitrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the lecon model
   */
  interface leconFieldRefs {
    readonly id_lecon: FieldRef<"lecon", 'Int'>
    readonly titre: FieldRef<"lecon", 'String'>
    readonly contenuTextuel: FieldRef<"lecon", 'String'>
    readonly contenuVideo: FieldRef<"lecon", 'String'>
    readonly numeroOrdre: FieldRef<"lecon", 'Int'>
    readonly id_chapitre: FieldRef<"lecon", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * lecon findUnique
   */
  export type leconFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecon
     */
    select?: leconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecon
     */
    omit?: leconOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leconInclude<ExtArgs> | null
    /**
     * Filter, which lecon to fetch.
     */
    where: leconWhereUniqueInput
  }

  /**
   * lecon findUniqueOrThrow
   */
  export type leconFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecon
     */
    select?: leconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecon
     */
    omit?: leconOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leconInclude<ExtArgs> | null
    /**
     * Filter, which lecon to fetch.
     */
    where: leconWhereUniqueInput
  }

  /**
   * lecon findFirst
   */
  export type leconFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecon
     */
    select?: leconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecon
     */
    omit?: leconOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leconInclude<ExtArgs> | null
    /**
     * Filter, which lecon to fetch.
     */
    where?: leconWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lecons to fetch.
     */
    orderBy?: leconOrderByWithRelationInput | leconOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lecons.
     */
    cursor?: leconWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lecons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lecons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lecons.
     */
    distinct?: LeconScalarFieldEnum | LeconScalarFieldEnum[]
  }

  /**
   * lecon findFirstOrThrow
   */
  export type leconFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecon
     */
    select?: leconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecon
     */
    omit?: leconOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leconInclude<ExtArgs> | null
    /**
     * Filter, which lecon to fetch.
     */
    where?: leconWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lecons to fetch.
     */
    orderBy?: leconOrderByWithRelationInput | leconOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lecons.
     */
    cursor?: leconWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lecons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lecons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lecons.
     */
    distinct?: LeconScalarFieldEnum | LeconScalarFieldEnum[]
  }

  /**
   * lecon findMany
   */
  export type leconFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecon
     */
    select?: leconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecon
     */
    omit?: leconOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leconInclude<ExtArgs> | null
    /**
     * Filter, which lecons to fetch.
     */
    where?: leconWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lecons to fetch.
     */
    orderBy?: leconOrderByWithRelationInput | leconOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lecons.
     */
    cursor?: leconWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lecons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lecons.
     */
    skip?: number
    distinct?: LeconScalarFieldEnum | LeconScalarFieldEnum[]
  }

  /**
   * lecon create
   */
  export type leconCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecon
     */
    select?: leconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecon
     */
    omit?: leconOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leconInclude<ExtArgs> | null
    /**
     * The data needed to create a lecon.
     */
    data: XOR<leconCreateInput, leconUncheckedCreateInput>
  }

  /**
   * lecon createMany
   */
  export type leconCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lecons.
     */
    data: leconCreateManyInput | leconCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lecon createManyAndReturn
   */
  export type leconCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecon
     */
    select?: leconSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lecon
     */
    omit?: leconOmit<ExtArgs> | null
    /**
     * The data used to create many lecons.
     */
    data: leconCreateManyInput | leconCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leconIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * lecon update
   */
  export type leconUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecon
     */
    select?: leconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecon
     */
    omit?: leconOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leconInclude<ExtArgs> | null
    /**
     * The data needed to update a lecon.
     */
    data: XOR<leconUpdateInput, leconUncheckedUpdateInput>
    /**
     * Choose, which lecon to update.
     */
    where: leconWhereUniqueInput
  }

  /**
   * lecon updateMany
   */
  export type leconUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lecons.
     */
    data: XOR<leconUpdateManyMutationInput, leconUncheckedUpdateManyInput>
    /**
     * Filter which lecons to update
     */
    where?: leconWhereInput
    /**
     * Limit how many lecons to update.
     */
    limit?: number
  }

  /**
   * lecon updateManyAndReturn
   */
  export type leconUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecon
     */
    select?: leconSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lecon
     */
    omit?: leconOmit<ExtArgs> | null
    /**
     * The data used to update lecons.
     */
    data: XOR<leconUpdateManyMutationInput, leconUncheckedUpdateManyInput>
    /**
     * Filter which lecons to update
     */
    where?: leconWhereInput
    /**
     * Limit how many lecons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leconIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * lecon upsert
   */
  export type leconUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecon
     */
    select?: leconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecon
     */
    omit?: leconOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leconInclude<ExtArgs> | null
    /**
     * The filter to search for the lecon to update in case it exists.
     */
    where: leconWhereUniqueInput
    /**
     * In case the lecon found by the `where` argument doesn't exist, create a new lecon with this data.
     */
    create: XOR<leconCreateInput, leconUncheckedCreateInput>
    /**
     * In case the lecon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<leconUpdateInput, leconUncheckedUpdateInput>
  }

  /**
   * lecon delete
   */
  export type leconDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecon
     */
    select?: leconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecon
     */
    omit?: leconOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leconInclude<ExtArgs> | null
    /**
     * Filter which lecon to delete.
     */
    where: leconWhereUniqueInput
  }

  /**
   * lecon deleteMany
   */
  export type leconDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lecons to delete
     */
    where?: leconWhereInput
    /**
     * Limit how many lecons to delete.
     */
    limit?: number
  }

  /**
   * lecon without action
   */
  export type leconDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecon
     */
    select?: leconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecon
     */
    omit?: leconOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leconInclude<ExtArgs> | null
  }


  /**
   * Model veille
   */

  export type AggregateVeille = {
    _count: VeilleCountAggregateOutputType | null
    _avg: VeilleAvgAggregateOutputType | null
    _sum: VeilleSumAggregateOutputType | null
    _min: VeilleMinAggregateOutputType | null
    _max: VeilleMaxAggregateOutputType | null
  }

  export type VeilleAvgAggregateOutputType = {
    id_veille: number | null
    id_apprenant: number | null
    id_formateur: number | null
  }

  export type VeilleSumAggregateOutputType = {
    id_veille: number | null
    id_apprenant: number | null
    id_formateur: number | null
  }

  export type VeilleMinAggregateOutputType = {
    id_veille: number | null
    titre: string | null
    lien_docDonnee: string | null
    lien_docRendu: string | null
    date_creation: Date | null
    date_fin: Date | null
    referentiel: $Enums.Referentiel | null
    id_apprenant: number | null
    id_formateur: number | null
  }

  export type VeilleMaxAggregateOutputType = {
    id_veille: number | null
    titre: string | null
    lien_docDonnee: string | null
    lien_docRendu: string | null
    date_creation: Date | null
    date_fin: Date | null
    referentiel: $Enums.Referentiel | null
    id_apprenant: number | null
    id_formateur: number | null
  }

  export type VeilleCountAggregateOutputType = {
    id_veille: number
    titre: number
    lien_docDonnee: number
    lien_docRendu: number
    date_creation: number
    date_fin: number
    referentiel: number
    id_apprenant: number
    id_formateur: number
    _all: number
  }


  export type VeilleAvgAggregateInputType = {
    id_veille?: true
    id_apprenant?: true
    id_formateur?: true
  }

  export type VeilleSumAggregateInputType = {
    id_veille?: true
    id_apprenant?: true
    id_formateur?: true
  }

  export type VeilleMinAggregateInputType = {
    id_veille?: true
    titre?: true
    lien_docDonnee?: true
    lien_docRendu?: true
    date_creation?: true
    date_fin?: true
    referentiel?: true
    id_apprenant?: true
    id_formateur?: true
  }

  export type VeilleMaxAggregateInputType = {
    id_veille?: true
    titre?: true
    lien_docDonnee?: true
    lien_docRendu?: true
    date_creation?: true
    date_fin?: true
    referentiel?: true
    id_apprenant?: true
    id_formateur?: true
  }

  export type VeilleCountAggregateInputType = {
    id_veille?: true
    titre?: true
    lien_docDonnee?: true
    lien_docRendu?: true
    date_creation?: true
    date_fin?: true
    referentiel?: true
    id_apprenant?: true
    id_formateur?: true
    _all?: true
  }

  export type VeilleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which veille to aggregate.
     */
    where?: veilleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of veilles to fetch.
     */
    orderBy?: veilleOrderByWithRelationInput | veilleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: veilleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` veilles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` veilles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned veilles
    **/
    _count?: true | VeilleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VeilleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VeilleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VeilleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VeilleMaxAggregateInputType
  }

  export type GetVeilleAggregateType<T extends VeilleAggregateArgs> = {
        [P in keyof T & keyof AggregateVeille]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVeille[P]>
      : GetScalarType<T[P], AggregateVeille[P]>
  }




  export type veilleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: veilleWhereInput
    orderBy?: veilleOrderByWithAggregationInput | veilleOrderByWithAggregationInput[]
    by: VeilleScalarFieldEnum[] | VeilleScalarFieldEnum
    having?: veilleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VeilleCountAggregateInputType | true
    _avg?: VeilleAvgAggregateInputType
    _sum?: VeilleSumAggregateInputType
    _min?: VeilleMinAggregateInputType
    _max?: VeilleMaxAggregateInputType
  }

  export type VeilleGroupByOutputType = {
    id_veille: number
    titre: string
    lien_docDonnee: string
    lien_docRendu: string | null
    date_creation: Date
    date_fin: Date
    referentiel: $Enums.Referentiel
    id_apprenant: number | null
    id_formateur: number
    _count: VeilleCountAggregateOutputType | null
    _avg: VeilleAvgAggregateOutputType | null
    _sum: VeilleSumAggregateOutputType | null
    _min: VeilleMinAggregateOutputType | null
    _max: VeilleMaxAggregateOutputType | null
  }

  type GetVeilleGroupByPayload<T extends veilleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VeilleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VeilleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VeilleGroupByOutputType[P]>
            : GetScalarType<T[P], VeilleGroupByOutputType[P]>
        }
      >
    >


  export type veilleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_veille?: boolean
    titre?: boolean
    lien_docDonnee?: boolean
    lien_docRendu?: boolean
    date_creation?: boolean
    date_fin?: boolean
    referentiel?: boolean
    id_apprenant?: boolean
    id_formateur?: boolean
    formateur?: boolean | formateurDefaultArgs<ExtArgs>
    apprenant?: boolean | veille$apprenantArgs<ExtArgs>
    Soumission?: boolean | veille$SoumissionArgs<ExtArgs>
    _count?: boolean | VeilleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["veille"]>

  export type veilleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_veille?: boolean
    titre?: boolean
    lien_docDonnee?: boolean
    lien_docRendu?: boolean
    date_creation?: boolean
    date_fin?: boolean
    referentiel?: boolean
    id_apprenant?: boolean
    id_formateur?: boolean
    formateur?: boolean | formateurDefaultArgs<ExtArgs>
    apprenant?: boolean | veille$apprenantArgs<ExtArgs>
  }, ExtArgs["result"]["veille"]>

  export type veilleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_veille?: boolean
    titre?: boolean
    lien_docDonnee?: boolean
    lien_docRendu?: boolean
    date_creation?: boolean
    date_fin?: boolean
    referentiel?: boolean
    id_apprenant?: boolean
    id_formateur?: boolean
    formateur?: boolean | formateurDefaultArgs<ExtArgs>
    apprenant?: boolean | veille$apprenantArgs<ExtArgs>
  }, ExtArgs["result"]["veille"]>

  export type veilleSelectScalar = {
    id_veille?: boolean
    titre?: boolean
    lien_docDonnee?: boolean
    lien_docRendu?: boolean
    date_creation?: boolean
    date_fin?: boolean
    referentiel?: boolean
    id_apprenant?: boolean
    id_formateur?: boolean
  }

  export type veilleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_veille" | "titre" | "lien_docDonnee" | "lien_docRendu" | "date_creation" | "date_fin" | "referentiel" | "id_apprenant" | "id_formateur", ExtArgs["result"]["veille"]>
  export type veilleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formateur?: boolean | formateurDefaultArgs<ExtArgs>
    apprenant?: boolean | veille$apprenantArgs<ExtArgs>
    Soumission?: boolean | veille$SoumissionArgs<ExtArgs>
    _count?: boolean | VeilleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type veilleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formateur?: boolean | formateurDefaultArgs<ExtArgs>
    apprenant?: boolean | veille$apprenantArgs<ExtArgs>
  }
  export type veilleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formateur?: boolean | formateurDefaultArgs<ExtArgs>
    apprenant?: boolean | veille$apprenantArgs<ExtArgs>
  }

  export type $veillePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "veille"
    objects: {
      formateur: Prisma.$formateurPayload<ExtArgs>
      apprenant: Prisma.$apprenantPayload<ExtArgs> | null
      Soumission: Prisma.$SoumissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_veille: number
      titre: string
      lien_docDonnee: string
      lien_docRendu: string | null
      date_creation: Date
      date_fin: Date
      referentiel: $Enums.Referentiel
      id_apprenant: number | null
      id_formateur: number
    }, ExtArgs["result"]["veille"]>
    composites: {}
  }

  type veilleGetPayload<S extends boolean | null | undefined | veilleDefaultArgs> = $Result.GetResult<Prisma.$veillePayload, S>

  type veilleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<veilleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VeilleCountAggregateInputType | true
    }

  export interface veilleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['veille'], meta: { name: 'veille' } }
    /**
     * Find zero or one Veille that matches the filter.
     * @param {veilleFindUniqueArgs} args - Arguments to find a Veille
     * @example
     * // Get one Veille
     * const veille = await prisma.veille.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends veilleFindUniqueArgs>(args: SelectSubset<T, veilleFindUniqueArgs<ExtArgs>>): Prisma__veilleClient<$Result.GetResult<Prisma.$veillePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Veille that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {veilleFindUniqueOrThrowArgs} args - Arguments to find a Veille
     * @example
     * // Get one Veille
     * const veille = await prisma.veille.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends veilleFindUniqueOrThrowArgs>(args: SelectSubset<T, veilleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__veilleClient<$Result.GetResult<Prisma.$veillePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Veille that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {veilleFindFirstArgs} args - Arguments to find a Veille
     * @example
     * // Get one Veille
     * const veille = await prisma.veille.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends veilleFindFirstArgs>(args?: SelectSubset<T, veilleFindFirstArgs<ExtArgs>>): Prisma__veilleClient<$Result.GetResult<Prisma.$veillePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Veille that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {veilleFindFirstOrThrowArgs} args - Arguments to find a Veille
     * @example
     * // Get one Veille
     * const veille = await prisma.veille.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends veilleFindFirstOrThrowArgs>(args?: SelectSubset<T, veilleFindFirstOrThrowArgs<ExtArgs>>): Prisma__veilleClient<$Result.GetResult<Prisma.$veillePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Veilles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {veilleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Veilles
     * const veilles = await prisma.veille.findMany()
     * 
     * // Get first 10 Veilles
     * const veilles = await prisma.veille.findMany({ take: 10 })
     * 
     * // Only select the `id_veille`
     * const veilleWithId_veilleOnly = await prisma.veille.findMany({ select: { id_veille: true } })
     * 
     */
    findMany<T extends veilleFindManyArgs>(args?: SelectSubset<T, veilleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$veillePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Veille.
     * @param {veilleCreateArgs} args - Arguments to create a Veille.
     * @example
     * // Create one Veille
     * const Veille = await prisma.veille.create({
     *   data: {
     *     // ... data to create a Veille
     *   }
     * })
     * 
     */
    create<T extends veilleCreateArgs>(args: SelectSubset<T, veilleCreateArgs<ExtArgs>>): Prisma__veilleClient<$Result.GetResult<Prisma.$veillePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Veilles.
     * @param {veilleCreateManyArgs} args - Arguments to create many Veilles.
     * @example
     * // Create many Veilles
     * const veille = await prisma.veille.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends veilleCreateManyArgs>(args?: SelectSubset<T, veilleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Veilles and returns the data saved in the database.
     * @param {veilleCreateManyAndReturnArgs} args - Arguments to create many Veilles.
     * @example
     * // Create many Veilles
     * const veille = await prisma.veille.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Veilles and only return the `id_veille`
     * const veilleWithId_veilleOnly = await prisma.veille.createManyAndReturn({
     *   select: { id_veille: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends veilleCreateManyAndReturnArgs>(args?: SelectSubset<T, veilleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$veillePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Veille.
     * @param {veilleDeleteArgs} args - Arguments to delete one Veille.
     * @example
     * // Delete one Veille
     * const Veille = await prisma.veille.delete({
     *   where: {
     *     // ... filter to delete one Veille
     *   }
     * })
     * 
     */
    delete<T extends veilleDeleteArgs>(args: SelectSubset<T, veilleDeleteArgs<ExtArgs>>): Prisma__veilleClient<$Result.GetResult<Prisma.$veillePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Veille.
     * @param {veilleUpdateArgs} args - Arguments to update one Veille.
     * @example
     * // Update one Veille
     * const veille = await prisma.veille.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends veilleUpdateArgs>(args: SelectSubset<T, veilleUpdateArgs<ExtArgs>>): Prisma__veilleClient<$Result.GetResult<Prisma.$veillePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Veilles.
     * @param {veilleDeleteManyArgs} args - Arguments to filter Veilles to delete.
     * @example
     * // Delete a few Veilles
     * const { count } = await prisma.veille.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends veilleDeleteManyArgs>(args?: SelectSubset<T, veilleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Veilles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {veilleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Veilles
     * const veille = await prisma.veille.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends veilleUpdateManyArgs>(args: SelectSubset<T, veilleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Veilles and returns the data updated in the database.
     * @param {veilleUpdateManyAndReturnArgs} args - Arguments to update many Veilles.
     * @example
     * // Update many Veilles
     * const veille = await prisma.veille.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Veilles and only return the `id_veille`
     * const veilleWithId_veilleOnly = await prisma.veille.updateManyAndReturn({
     *   select: { id_veille: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends veilleUpdateManyAndReturnArgs>(args: SelectSubset<T, veilleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$veillePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Veille.
     * @param {veilleUpsertArgs} args - Arguments to update or create a Veille.
     * @example
     * // Update or create a Veille
     * const veille = await prisma.veille.upsert({
     *   create: {
     *     // ... data to create a Veille
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Veille we want to update
     *   }
     * })
     */
    upsert<T extends veilleUpsertArgs>(args: SelectSubset<T, veilleUpsertArgs<ExtArgs>>): Prisma__veilleClient<$Result.GetResult<Prisma.$veillePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Veilles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {veilleCountArgs} args - Arguments to filter Veilles to count.
     * @example
     * // Count the number of Veilles
     * const count = await prisma.veille.count({
     *   where: {
     *     // ... the filter for the Veilles we want to count
     *   }
     * })
    **/
    count<T extends veilleCountArgs>(
      args?: Subset<T, veilleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VeilleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Veille.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeilleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VeilleAggregateArgs>(args: Subset<T, VeilleAggregateArgs>): Prisma.PrismaPromise<GetVeilleAggregateType<T>>

    /**
     * Group by Veille.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {veilleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends veilleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: veilleGroupByArgs['orderBy'] }
        : { orderBy?: veilleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, veilleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVeilleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the veille model
   */
  readonly fields: veilleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for veille.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__veilleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    formateur<T extends formateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, formateurDefaultArgs<ExtArgs>>): Prisma__formateurClient<$Result.GetResult<Prisma.$formateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    apprenant<T extends veille$apprenantArgs<ExtArgs> = {}>(args?: Subset<T, veille$apprenantArgs<ExtArgs>>): Prisma__apprenantClient<$Result.GetResult<Prisma.$apprenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Soumission<T extends veille$SoumissionArgs<ExtArgs> = {}>(args?: Subset<T, veille$SoumissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoumissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the veille model
   */
  interface veilleFieldRefs {
    readonly id_veille: FieldRef<"veille", 'Int'>
    readonly titre: FieldRef<"veille", 'String'>
    readonly lien_docDonnee: FieldRef<"veille", 'String'>
    readonly lien_docRendu: FieldRef<"veille", 'String'>
    readonly date_creation: FieldRef<"veille", 'DateTime'>
    readonly date_fin: FieldRef<"veille", 'DateTime'>
    readonly referentiel: FieldRef<"veille", 'Referentiel'>
    readonly id_apprenant: FieldRef<"veille", 'Int'>
    readonly id_formateur: FieldRef<"veille", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * veille findUnique
   */
  export type veilleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veille
     */
    select?: veilleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veille
     */
    omit?: veilleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veilleInclude<ExtArgs> | null
    /**
     * Filter, which veille to fetch.
     */
    where: veilleWhereUniqueInput
  }

  /**
   * veille findUniqueOrThrow
   */
  export type veilleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veille
     */
    select?: veilleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veille
     */
    omit?: veilleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veilleInclude<ExtArgs> | null
    /**
     * Filter, which veille to fetch.
     */
    where: veilleWhereUniqueInput
  }

  /**
   * veille findFirst
   */
  export type veilleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veille
     */
    select?: veilleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veille
     */
    omit?: veilleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veilleInclude<ExtArgs> | null
    /**
     * Filter, which veille to fetch.
     */
    where?: veilleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of veilles to fetch.
     */
    orderBy?: veilleOrderByWithRelationInput | veilleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for veilles.
     */
    cursor?: veilleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` veilles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` veilles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of veilles.
     */
    distinct?: VeilleScalarFieldEnum | VeilleScalarFieldEnum[]
  }

  /**
   * veille findFirstOrThrow
   */
  export type veilleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veille
     */
    select?: veilleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veille
     */
    omit?: veilleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veilleInclude<ExtArgs> | null
    /**
     * Filter, which veille to fetch.
     */
    where?: veilleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of veilles to fetch.
     */
    orderBy?: veilleOrderByWithRelationInput | veilleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for veilles.
     */
    cursor?: veilleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` veilles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` veilles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of veilles.
     */
    distinct?: VeilleScalarFieldEnum | VeilleScalarFieldEnum[]
  }

  /**
   * veille findMany
   */
  export type veilleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veille
     */
    select?: veilleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veille
     */
    omit?: veilleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veilleInclude<ExtArgs> | null
    /**
     * Filter, which veilles to fetch.
     */
    where?: veilleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of veilles to fetch.
     */
    orderBy?: veilleOrderByWithRelationInput | veilleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing veilles.
     */
    cursor?: veilleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` veilles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` veilles.
     */
    skip?: number
    distinct?: VeilleScalarFieldEnum | VeilleScalarFieldEnum[]
  }

  /**
   * veille create
   */
  export type veilleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veille
     */
    select?: veilleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veille
     */
    omit?: veilleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veilleInclude<ExtArgs> | null
    /**
     * The data needed to create a veille.
     */
    data: XOR<veilleCreateInput, veilleUncheckedCreateInput>
  }

  /**
   * veille createMany
   */
  export type veilleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many veilles.
     */
    data: veilleCreateManyInput | veilleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * veille createManyAndReturn
   */
  export type veilleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veille
     */
    select?: veilleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the veille
     */
    omit?: veilleOmit<ExtArgs> | null
    /**
     * The data used to create many veilles.
     */
    data: veilleCreateManyInput | veilleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veilleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * veille update
   */
  export type veilleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veille
     */
    select?: veilleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veille
     */
    omit?: veilleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veilleInclude<ExtArgs> | null
    /**
     * The data needed to update a veille.
     */
    data: XOR<veilleUpdateInput, veilleUncheckedUpdateInput>
    /**
     * Choose, which veille to update.
     */
    where: veilleWhereUniqueInput
  }

  /**
   * veille updateMany
   */
  export type veilleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update veilles.
     */
    data: XOR<veilleUpdateManyMutationInput, veilleUncheckedUpdateManyInput>
    /**
     * Filter which veilles to update
     */
    where?: veilleWhereInput
    /**
     * Limit how many veilles to update.
     */
    limit?: number
  }

  /**
   * veille updateManyAndReturn
   */
  export type veilleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veille
     */
    select?: veilleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the veille
     */
    omit?: veilleOmit<ExtArgs> | null
    /**
     * The data used to update veilles.
     */
    data: XOR<veilleUpdateManyMutationInput, veilleUncheckedUpdateManyInput>
    /**
     * Filter which veilles to update
     */
    where?: veilleWhereInput
    /**
     * Limit how many veilles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veilleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * veille upsert
   */
  export type veilleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veille
     */
    select?: veilleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veille
     */
    omit?: veilleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veilleInclude<ExtArgs> | null
    /**
     * The filter to search for the veille to update in case it exists.
     */
    where: veilleWhereUniqueInput
    /**
     * In case the veille found by the `where` argument doesn't exist, create a new veille with this data.
     */
    create: XOR<veilleCreateInput, veilleUncheckedCreateInput>
    /**
     * In case the veille was found with the provided `where` argument, update it with this data.
     */
    update: XOR<veilleUpdateInput, veilleUncheckedUpdateInput>
  }

  /**
   * veille delete
   */
  export type veilleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veille
     */
    select?: veilleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veille
     */
    omit?: veilleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veilleInclude<ExtArgs> | null
    /**
     * Filter which veille to delete.
     */
    where: veilleWhereUniqueInput
  }

  /**
   * veille deleteMany
   */
  export type veilleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which veilles to delete
     */
    where?: veilleWhereInput
    /**
     * Limit how many veilles to delete.
     */
    limit?: number
  }

  /**
   * veille.apprenant
   */
  export type veille$apprenantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apprenant
     */
    select?: apprenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apprenant
     */
    omit?: apprenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apprenantInclude<ExtArgs> | null
    where?: apprenantWhereInput
  }

  /**
   * veille.Soumission
   */
  export type veille$SoumissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Soumission
     */
    select?: SoumissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Soumission
     */
    omit?: SoumissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoumissionInclude<ExtArgs> | null
    where?: SoumissionWhereInput
    orderBy?: SoumissionOrderByWithRelationInput | SoumissionOrderByWithRelationInput[]
    cursor?: SoumissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SoumissionScalarFieldEnum | SoumissionScalarFieldEnum[]
  }

  /**
   * veille without action
   */
  export type veilleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veille
     */
    select?: veilleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veille
     */
    omit?: veilleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veilleInclude<ExtArgs> | null
  }


  /**
   * Model Soumission
   */

  export type AggregateSoumission = {
    _count: SoumissionCountAggregateOutputType | null
    _avg: SoumissionAvgAggregateOutputType | null
    _sum: SoumissionSumAggregateOutputType | null
    _min: SoumissionMinAggregateOutputType | null
    _max: SoumissionMaxAggregateOutputType | null
  }

  export type SoumissionAvgAggregateOutputType = {
    id_soumission: number | null
    id_veille: number | null
    id_apprenant: number | null
  }

  export type SoumissionSumAggregateOutputType = {
    id_soumission: number | null
    id_veille: number | null
    id_apprenant: number | null
  }

  export type SoumissionMinAggregateOutputType = {
    id_soumission: number | null
    id_veille: number | null
    id_apprenant: number | null
    lien_soumission: string | null
    date_soumission: Date | null
  }

  export type SoumissionMaxAggregateOutputType = {
    id_soumission: number | null
    id_veille: number | null
    id_apprenant: number | null
    lien_soumission: string | null
    date_soumission: Date | null
  }

  export type SoumissionCountAggregateOutputType = {
    id_soumission: number
    id_veille: number
    id_apprenant: number
    lien_soumission: number
    date_soumission: number
    _all: number
  }


  export type SoumissionAvgAggregateInputType = {
    id_soumission?: true
    id_veille?: true
    id_apprenant?: true
  }

  export type SoumissionSumAggregateInputType = {
    id_soumission?: true
    id_veille?: true
    id_apprenant?: true
  }

  export type SoumissionMinAggregateInputType = {
    id_soumission?: true
    id_veille?: true
    id_apprenant?: true
    lien_soumission?: true
    date_soumission?: true
  }

  export type SoumissionMaxAggregateInputType = {
    id_soumission?: true
    id_veille?: true
    id_apprenant?: true
    lien_soumission?: true
    date_soumission?: true
  }

  export type SoumissionCountAggregateInputType = {
    id_soumission?: true
    id_veille?: true
    id_apprenant?: true
    lien_soumission?: true
    date_soumission?: true
    _all?: true
  }

  export type SoumissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Soumission to aggregate.
     */
    where?: SoumissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Soumissions to fetch.
     */
    orderBy?: SoumissionOrderByWithRelationInput | SoumissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SoumissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Soumissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Soumissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Soumissions
    **/
    _count?: true | SoumissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SoumissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SoumissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SoumissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SoumissionMaxAggregateInputType
  }

  export type GetSoumissionAggregateType<T extends SoumissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSoumission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSoumission[P]>
      : GetScalarType<T[P], AggregateSoumission[P]>
  }




  export type SoumissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SoumissionWhereInput
    orderBy?: SoumissionOrderByWithAggregationInput | SoumissionOrderByWithAggregationInput[]
    by: SoumissionScalarFieldEnum[] | SoumissionScalarFieldEnum
    having?: SoumissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SoumissionCountAggregateInputType | true
    _avg?: SoumissionAvgAggregateInputType
    _sum?: SoumissionSumAggregateInputType
    _min?: SoumissionMinAggregateInputType
    _max?: SoumissionMaxAggregateInputType
  }

  export type SoumissionGroupByOutputType = {
    id_soumission: number
    id_veille: number
    id_apprenant: number
    lien_soumission: string
    date_soumission: Date
    _count: SoumissionCountAggregateOutputType | null
    _avg: SoumissionAvgAggregateOutputType | null
    _sum: SoumissionSumAggregateOutputType | null
    _min: SoumissionMinAggregateOutputType | null
    _max: SoumissionMaxAggregateOutputType | null
  }

  type GetSoumissionGroupByPayload<T extends SoumissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SoumissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SoumissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SoumissionGroupByOutputType[P]>
            : GetScalarType<T[P], SoumissionGroupByOutputType[P]>
        }
      >
    >


  export type SoumissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_soumission?: boolean
    id_veille?: boolean
    id_apprenant?: boolean
    lien_soumission?: boolean
    date_soumission?: boolean
    veille?: boolean | veilleDefaultArgs<ExtArgs>
    apprenant?: boolean | apprenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["soumission"]>

  export type SoumissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_soumission?: boolean
    id_veille?: boolean
    id_apprenant?: boolean
    lien_soumission?: boolean
    date_soumission?: boolean
    veille?: boolean | veilleDefaultArgs<ExtArgs>
    apprenant?: boolean | apprenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["soumission"]>

  export type SoumissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_soumission?: boolean
    id_veille?: boolean
    id_apprenant?: boolean
    lien_soumission?: boolean
    date_soumission?: boolean
    veille?: boolean | veilleDefaultArgs<ExtArgs>
    apprenant?: boolean | apprenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["soumission"]>

  export type SoumissionSelectScalar = {
    id_soumission?: boolean
    id_veille?: boolean
    id_apprenant?: boolean
    lien_soumission?: boolean
    date_soumission?: boolean
  }

  export type SoumissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_soumission" | "id_veille" | "id_apprenant" | "lien_soumission" | "date_soumission", ExtArgs["result"]["soumission"]>
  export type SoumissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    veille?: boolean | veilleDefaultArgs<ExtArgs>
    apprenant?: boolean | apprenantDefaultArgs<ExtArgs>
  }
  export type SoumissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    veille?: boolean | veilleDefaultArgs<ExtArgs>
    apprenant?: boolean | apprenantDefaultArgs<ExtArgs>
  }
  export type SoumissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    veille?: boolean | veilleDefaultArgs<ExtArgs>
    apprenant?: boolean | apprenantDefaultArgs<ExtArgs>
  }

  export type $SoumissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Soumission"
    objects: {
      veille: Prisma.$veillePayload<ExtArgs>
      apprenant: Prisma.$apprenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_soumission: number
      id_veille: number
      id_apprenant: number
      lien_soumission: string
      date_soumission: Date
    }, ExtArgs["result"]["soumission"]>
    composites: {}
  }

  type SoumissionGetPayload<S extends boolean | null | undefined | SoumissionDefaultArgs> = $Result.GetResult<Prisma.$SoumissionPayload, S>

  type SoumissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SoumissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SoumissionCountAggregateInputType | true
    }

  export interface SoumissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Soumission'], meta: { name: 'Soumission' } }
    /**
     * Find zero or one Soumission that matches the filter.
     * @param {SoumissionFindUniqueArgs} args - Arguments to find a Soumission
     * @example
     * // Get one Soumission
     * const soumission = await prisma.soumission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SoumissionFindUniqueArgs>(args: SelectSubset<T, SoumissionFindUniqueArgs<ExtArgs>>): Prisma__SoumissionClient<$Result.GetResult<Prisma.$SoumissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Soumission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SoumissionFindUniqueOrThrowArgs} args - Arguments to find a Soumission
     * @example
     * // Get one Soumission
     * const soumission = await prisma.soumission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SoumissionFindUniqueOrThrowArgs>(args: SelectSubset<T, SoumissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SoumissionClient<$Result.GetResult<Prisma.$SoumissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Soumission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoumissionFindFirstArgs} args - Arguments to find a Soumission
     * @example
     * // Get one Soumission
     * const soumission = await prisma.soumission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SoumissionFindFirstArgs>(args?: SelectSubset<T, SoumissionFindFirstArgs<ExtArgs>>): Prisma__SoumissionClient<$Result.GetResult<Prisma.$SoumissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Soumission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoumissionFindFirstOrThrowArgs} args - Arguments to find a Soumission
     * @example
     * // Get one Soumission
     * const soumission = await prisma.soumission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SoumissionFindFirstOrThrowArgs>(args?: SelectSubset<T, SoumissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SoumissionClient<$Result.GetResult<Prisma.$SoumissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Soumissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoumissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Soumissions
     * const soumissions = await prisma.soumission.findMany()
     * 
     * // Get first 10 Soumissions
     * const soumissions = await prisma.soumission.findMany({ take: 10 })
     * 
     * // Only select the `id_soumission`
     * const soumissionWithId_soumissionOnly = await prisma.soumission.findMany({ select: { id_soumission: true } })
     * 
     */
    findMany<T extends SoumissionFindManyArgs>(args?: SelectSubset<T, SoumissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoumissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Soumission.
     * @param {SoumissionCreateArgs} args - Arguments to create a Soumission.
     * @example
     * // Create one Soumission
     * const Soumission = await prisma.soumission.create({
     *   data: {
     *     // ... data to create a Soumission
     *   }
     * })
     * 
     */
    create<T extends SoumissionCreateArgs>(args: SelectSubset<T, SoumissionCreateArgs<ExtArgs>>): Prisma__SoumissionClient<$Result.GetResult<Prisma.$SoumissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Soumissions.
     * @param {SoumissionCreateManyArgs} args - Arguments to create many Soumissions.
     * @example
     * // Create many Soumissions
     * const soumission = await prisma.soumission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SoumissionCreateManyArgs>(args?: SelectSubset<T, SoumissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Soumissions and returns the data saved in the database.
     * @param {SoumissionCreateManyAndReturnArgs} args - Arguments to create many Soumissions.
     * @example
     * // Create many Soumissions
     * const soumission = await prisma.soumission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Soumissions and only return the `id_soumission`
     * const soumissionWithId_soumissionOnly = await prisma.soumission.createManyAndReturn({
     *   select: { id_soumission: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SoumissionCreateManyAndReturnArgs>(args?: SelectSubset<T, SoumissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoumissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Soumission.
     * @param {SoumissionDeleteArgs} args - Arguments to delete one Soumission.
     * @example
     * // Delete one Soumission
     * const Soumission = await prisma.soumission.delete({
     *   where: {
     *     // ... filter to delete one Soumission
     *   }
     * })
     * 
     */
    delete<T extends SoumissionDeleteArgs>(args: SelectSubset<T, SoumissionDeleteArgs<ExtArgs>>): Prisma__SoumissionClient<$Result.GetResult<Prisma.$SoumissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Soumission.
     * @param {SoumissionUpdateArgs} args - Arguments to update one Soumission.
     * @example
     * // Update one Soumission
     * const soumission = await prisma.soumission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SoumissionUpdateArgs>(args: SelectSubset<T, SoumissionUpdateArgs<ExtArgs>>): Prisma__SoumissionClient<$Result.GetResult<Prisma.$SoumissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Soumissions.
     * @param {SoumissionDeleteManyArgs} args - Arguments to filter Soumissions to delete.
     * @example
     * // Delete a few Soumissions
     * const { count } = await prisma.soumission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SoumissionDeleteManyArgs>(args?: SelectSubset<T, SoumissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Soumissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoumissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Soumissions
     * const soumission = await prisma.soumission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SoumissionUpdateManyArgs>(args: SelectSubset<T, SoumissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Soumissions and returns the data updated in the database.
     * @param {SoumissionUpdateManyAndReturnArgs} args - Arguments to update many Soumissions.
     * @example
     * // Update many Soumissions
     * const soumission = await prisma.soumission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Soumissions and only return the `id_soumission`
     * const soumissionWithId_soumissionOnly = await prisma.soumission.updateManyAndReturn({
     *   select: { id_soumission: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SoumissionUpdateManyAndReturnArgs>(args: SelectSubset<T, SoumissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoumissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Soumission.
     * @param {SoumissionUpsertArgs} args - Arguments to update or create a Soumission.
     * @example
     * // Update or create a Soumission
     * const soumission = await prisma.soumission.upsert({
     *   create: {
     *     // ... data to create a Soumission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Soumission we want to update
     *   }
     * })
     */
    upsert<T extends SoumissionUpsertArgs>(args: SelectSubset<T, SoumissionUpsertArgs<ExtArgs>>): Prisma__SoumissionClient<$Result.GetResult<Prisma.$SoumissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Soumissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoumissionCountArgs} args - Arguments to filter Soumissions to count.
     * @example
     * // Count the number of Soumissions
     * const count = await prisma.soumission.count({
     *   where: {
     *     // ... the filter for the Soumissions we want to count
     *   }
     * })
    **/
    count<T extends SoumissionCountArgs>(
      args?: Subset<T, SoumissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SoumissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Soumission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoumissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SoumissionAggregateArgs>(args: Subset<T, SoumissionAggregateArgs>): Prisma.PrismaPromise<GetSoumissionAggregateType<T>>

    /**
     * Group by Soumission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoumissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SoumissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SoumissionGroupByArgs['orderBy'] }
        : { orderBy?: SoumissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SoumissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSoumissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Soumission model
   */
  readonly fields: SoumissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Soumission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SoumissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    veille<T extends veilleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, veilleDefaultArgs<ExtArgs>>): Prisma__veilleClient<$Result.GetResult<Prisma.$veillePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    apprenant<T extends apprenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, apprenantDefaultArgs<ExtArgs>>): Prisma__apprenantClient<$Result.GetResult<Prisma.$apprenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Soumission model
   */
  interface SoumissionFieldRefs {
    readonly id_soumission: FieldRef<"Soumission", 'Int'>
    readonly id_veille: FieldRef<"Soumission", 'Int'>
    readonly id_apprenant: FieldRef<"Soumission", 'Int'>
    readonly lien_soumission: FieldRef<"Soumission", 'String'>
    readonly date_soumission: FieldRef<"Soumission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Soumission findUnique
   */
  export type SoumissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Soumission
     */
    select?: SoumissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Soumission
     */
    omit?: SoumissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoumissionInclude<ExtArgs> | null
    /**
     * Filter, which Soumission to fetch.
     */
    where: SoumissionWhereUniqueInput
  }

  /**
   * Soumission findUniqueOrThrow
   */
  export type SoumissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Soumission
     */
    select?: SoumissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Soumission
     */
    omit?: SoumissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoumissionInclude<ExtArgs> | null
    /**
     * Filter, which Soumission to fetch.
     */
    where: SoumissionWhereUniqueInput
  }

  /**
   * Soumission findFirst
   */
  export type SoumissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Soumission
     */
    select?: SoumissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Soumission
     */
    omit?: SoumissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoumissionInclude<ExtArgs> | null
    /**
     * Filter, which Soumission to fetch.
     */
    where?: SoumissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Soumissions to fetch.
     */
    orderBy?: SoumissionOrderByWithRelationInput | SoumissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Soumissions.
     */
    cursor?: SoumissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Soumissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Soumissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Soumissions.
     */
    distinct?: SoumissionScalarFieldEnum | SoumissionScalarFieldEnum[]
  }

  /**
   * Soumission findFirstOrThrow
   */
  export type SoumissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Soumission
     */
    select?: SoumissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Soumission
     */
    omit?: SoumissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoumissionInclude<ExtArgs> | null
    /**
     * Filter, which Soumission to fetch.
     */
    where?: SoumissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Soumissions to fetch.
     */
    orderBy?: SoumissionOrderByWithRelationInput | SoumissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Soumissions.
     */
    cursor?: SoumissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Soumissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Soumissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Soumissions.
     */
    distinct?: SoumissionScalarFieldEnum | SoumissionScalarFieldEnum[]
  }

  /**
   * Soumission findMany
   */
  export type SoumissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Soumission
     */
    select?: SoumissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Soumission
     */
    omit?: SoumissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoumissionInclude<ExtArgs> | null
    /**
     * Filter, which Soumissions to fetch.
     */
    where?: SoumissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Soumissions to fetch.
     */
    orderBy?: SoumissionOrderByWithRelationInput | SoumissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Soumissions.
     */
    cursor?: SoumissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Soumissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Soumissions.
     */
    skip?: number
    distinct?: SoumissionScalarFieldEnum | SoumissionScalarFieldEnum[]
  }

  /**
   * Soumission create
   */
  export type SoumissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Soumission
     */
    select?: SoumissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Soumission
     */
    omit?: SoumissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoumissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Soumission.
     */
    data: XOR<SoumissionCreateInput, SoumissionUncheckedCreateInput>
  }

  /**
   * Soumission createMany
   */
  export type SoumissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Soumissions.
     */
    data: SoumissionCreateManyInput | SoumissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Soumission createManyAndReturn
   */
  export type SoumissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Soumission
     */
    select?: SoumissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Soumission
     */
    omit?: SoumissionOmit<ExtArgs> | null
    /**
     * The data used to create many Soumissions.
     */
    data: SoumissionCreateManyInput | SoumissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoumissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Soumission update
   */
  export type SoumissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Soumission
     */
    select?: SoumissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Soumission
     */
    omit?: SoumissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoumissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Soumission.
     */
    data: XOR<SoumissionUpdateInput, SoumissionUncheckedUpdateInput>
    /**
     * Choose, which Soumission to update.
     */
    where: SoumissionWhereUniqueInput
  }

  /**
   * Soumission updateMany
   */
  export type SoumissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Soumissions.
     */
    data: XOR<SoumissionUpdateManyMutationInput, SoumissionUncheckedUpdateManyInput>
    /**
     * Filter which Soumissions to update
     */
    where?: SoumissionWhereInput
    /**
     * Limit how many Soumissions to update.
     */
    limit?: number
  }

  /**
   * Soumission updateManyAndReturn
   */
  export type SoumissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Soumission
     */
    select?: SoumissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Soumission
     */
    omit?: SoumissionOmit<ExtArgs> | null
    /**
     * The data used to update Soumissions.
     */
    data: XOR<SoumissionUpdateManyMutationInput, SoumissionUncheckedUpdateManyInput>
    /**
     * Filter which Soumissions to update
     */
    where?: SoumissionWhereInput
    /**
     * Limit how many Soumissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoumissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Soumission upsert
   */
  export type SoumissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Soumission
     */
    select?: SoumissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Soumission
     */
    omit?: SoumissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoumissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Soumission to update in case it exists.
     */
    where: SoumissionWhereUniqueInput
    /**
     * In case the Soumission found by the `where` argument doesn't exist, create a new Soumission with this data.
     */
    create: XOR<SoumissionCreateInput, SoumissionUncheckedCreateInput>
    /**
     * In case the Soumission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SoumissionUpdateInput, SoumissionUncheckedUpdateInput>
  }

  /**
   * Soumission delete
   */
  export type SoumissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Soumission
     */
    select?: SoumissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Soumission
     */
    omit?: SoumissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoumissionInclude<ExtArgs> | null
    /**
     * Filter which Soumission to delete.
     */
    where: SoumissionWhereUniqueInput
  }

  /**
   * Soumission deleteMany
   */
  export type SoumissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Soumissions to delete
     */
    where?: SoumissionWhereInput
    /**
     * Limit how many Soumissions to delete.
     */
    limit?: number
  }

  /**
   * Soumission without action
   */
  export type SoumissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Soumission
     */
    select?: SoumissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Soumission
     */
    omit?: SoumissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoumissionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FormateurScalarFieldEnum: {
    id_formateur: 'id_formateur',
    nom: 'nom',
    prenom: 'prenom',
    email: 'email',
    password: 'password',
    referentiel: 'referentiel'
  };

  export type FormateurScalarFieldEnum = (typeof FormateurScalarFieldEnum)[keyof typeof FormateurScalarFieldEnum]


  export const AdministrateurScalarFieldEnum: {
    id_administrateur: 'id_administrateur',
    nom: 'nom',
    prenom: 'prenom',
    email: 'email',
    password: 'password'
  };

  export type AdministrateurScalarFieldEnum = (typeof AdministrateurScalarFieldEnum)[keyof typeof AdministrateurScalarFieldEnum]


  export const ApprenantScalarFieldEnum: {
    id_apprenant: 'id_apprenant',
    nom: 'nom',
    prenom: 'prenom',
    email: 'email',
    password: 'password',
    referentiel: 'referentiel',
    photoProfil: 'photoProfil'
  };

  export type ApprenantScalarFieldEnum = (typeof ApprenantScalarFieldEnum)[keyof typeof ApprenantScalarFieldEnum]


  export const SuiviCoursScalarFieldEnum: {
    id_suiviCours: 'id_suiviCours',
    dateDebut: 'dateDebut',
    dateFin: 'dateFin',
    pourcentage: 'pourcentage',
    id_apprenant: 'id_apprenant',
    id_cours: 'id_cours'
  };

  export type SuiviCoursScalarFieldEnum = (typeof SuiviCoursScalarFieldEnum)[keyof typeof SuiviCoursScalarFieldEnum]


  export const CoursScalarFieldEnum: {
    id_cours: 'id_cours',
    categorie: 'categorie',
    titre: 'titre',
    description: 'description',
    photoCours: 'photoCours',
    dateCreation: 'dateCreation',
    id_formateur: 'id_formateur'
  };

  export type CoursScalarFieldEnum = (typeof CoursScalarFieldEnum)[keyof typeof CoursScalarFieldEnum]


  export const ChapitreScalarFieldEnum: {
    id_chapitre: 'id_chapitre',
    titre: 'titre',
    numeroOrdre: 'numeroOrdre',
    id_cours: 'id_cours'
  };

  export type ChapitreScalarFieldEnum = (typeof ChapitreScalarFieldEnum)[keyof typeof ChapitreScalarFieldEnum]


  export const LeconScalarFieldEnum: {
    id_lecon: 'id_lecon',
    titre: 'titre',
    contenuTextuel: 'contenuTextuel',
    contenuVideo: 'contenuVideo',
    numeroOrdre: 'numeroOrdre',
    id_chapitre: 'id_chapitre'
  };

  export type LeconScalarFieldEnum = (typeof LeconScalarFieldEnum)[keyof typeof LeconScalarFieldEnum]


  export const VeilleScalarFieldEnum: {
    id_veille: 'id_veille',
    titre: 'titre',
    lien_docDonnee: 'lien_docDonnee',
    lien_docRendu: 'lien_docRendu',
    date_creation: 'date_creation',
    date_fin: 'date_fin',
    referentiel: 'referentiel',
    id_apprenant: 'id_apprenant',
    id_formateur: 'id_formateur'
  };

  export type VeilleScalarFieldEnum = (typeof VeilleScalarFieldEnum)[keyof typeof VeilleScalarFieldEnum]


  export const SoumissionScalarFieldEnum: {
    id_soumission: 'id_soumission',
    id_veille: 'id_veille',
    id_apprenant: 'id_apprenant',
    lien_soumission: 'lien_soumission',
    date_soumission: 'date_soumission'
  };

  export type SoumissionScalarFieldEnum = (typeof SoumissionScalarFieldEnum)[keyof typeof SoumissionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Referentiel'
   */
  export type EnumReferentielFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Referentiel'>
    


  /**
   * Reference to a field of type 'Referentiel[]'
   */
  export type ListEnumReferentielFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Referentiel[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type formateurWhereInput = {
    AND?: formateurWhereInput | formateurWhereInput[]
    OR?: formateurWhereInput[]
    NOT?: formateurWhereInput | formateurWhereInput[]
    id_formateur?: IntFilter<"formateur"> | number
    nom?: StringFilter<"formateur"> | string
    prenom?: StringFilter<"formateur"> | string
    email?: StringFilter<"formateur"> | string
    password?: StringFilter<"formateur"> | string
    referentiel?: EnumReferentielFilter<"formateur"> | $Enums.Referentiel
    cours?: CoursListRelationFilter
    veille?: VeilleListRelationFilter
  }

  export type formateurOrderByWithRelationInput = {
    id_formateur?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    referentiel?: SortOrder
    cours?: coursOrderByRelationAggregateInput
    veille?: veilleOrderByRelationAggregateInput
  }

  export type formateurWhereUniqueInput = Prisma.AtLeast<{
    id_formateur?: number
    email?: string
    AND?: formateurWhereInput | formateurWhereInput[]
    OR?: formateurWhereInput[]
    NOT?: formateurWhereInput | formateurWhereInput[]
    nom?: StringFilter<"formateur"> | string
    prenom?: StringFilter<"formateur"> | string
    password?: StringFilter<"formateur"> | string
    referentiel?: EnumReferentielFilter<"formateur"> | $Enums.Referentiel
    cours?: CoursListRelationFilter
    veille?: VeilleListRelationFilter
  }, "id_formateur" | "email">

  export type formateurOrderByWithAggregationInput = {
    id_formateur?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    referentiel?: SortOrder
    _count?: formateurCountOrderByAggregateInput
    _avg?: formateurAvgOrderByAggregateInput
    _max?: formateurMaxOrderByAggregateInput
    _min?: formateurMinOrderByAggregateInput
    _sum?: formateurSumOrderByAggregateInput
  }

  export type formateurScalarWhereWithAggregatesInput = {
    AND?: formateurScalarWhereWithAggregatesInput | formateurScalarWhereWithAggregatesInput[]
    OR?: formateurScalarWhereWithAggregatesInput[]
    NOT?: formateurScalarWhereWithAggregatesInput | formateurScalarWhereWithAggregatesInput[]
    id_formateur?: IntWithAggregatesFilter<"formateur"> | number
    nom?: StringWithAggregatesFilter<"formateur"> | string
    prenom?: StringWithAggregatesFilter<"formateur"> | string
    email?: StringWithAggregatesFilter<"formateur"> | string
    password?: StringWithAggregatesFilter<"formateur"> | string
    referentiel?: EnumReferentielWithAggregatesFilter<"formateur"> | $Enums.Referentiel
  }

  export type administrateurWhereInput = {
    AND?: administrateurWhereInput | administrateurWhereInput[]
    OR?: administrateurWhereInput[]
    NOT?: administrateurWhereInput | administrateurWhereInput[]
    id_administrateur?: IntFilter<"administrateur"> | number
    nom?: StringFilter<"administrateur"> | string
    prenom?: StringFilter<"administrateur"> | string
    email?: StringFilter<"administrateur"> | string
    password?: StringFilter<"administrateur"> | string
  }

  export type administrateurOrderByWithRelationInput = {
    id_administrateur?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type administrateurWhereUniqueInput = Prisma.AtLeast<{
    id_administrateur?: number
    email?: string
    AND?: administrateurWhereInput | administrateurWhereInput[]
    OR?: administrateurWhereInput[]
    NOT?: administrateurWhereInput | administrateurWhereInput[]
    nom?: StringFilter<"administrateur"> | string
    prenom?: StringFilter<"administrateur"> | string
    password?: StringFilter<"administrateur"> | string
  }, "id_administrateur" | "email">

  export type administrateurOrderByWithAggregationInput = {
    id_administrateur?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: administrateurCountOrderByAggregateInput
    _avg?: administrateurAvgOrderByAggregateInput
    _max?: administrateurMaxOrderByAggregateInput
    _min?: administrateurMinOrderByAggregateInput
    _sum?: administrateurSumOrderByAggregateInput
  }

  export type administrateurScalarWhereWithAggregatesInput = {
    AND?: administrateurScalarWhereWithAggregatesInput | administrateurScalarWhereWithAggregatesInput[]
    OR?: administrateurScalarWhereWithAggregatesInput[]
    NOT?: administrateurScalarWhereWithAggregatesInput | administrateurScalarWhereWithAggregatesInput[]
    id_administrateur?: IntWithAggregatesFilter<"administrateur"> | number
    nom?: StringWithAggregatesFilter<"administrateur"> | string
    prenom?: StringWithAggregatesFilter<"administrateur"> | string
    email?: StringWithAggregatesFilter<"administrateur"> | string
    password?: StringWithAggregatesFilter<"administrateur"> | string
  }

  export type apprenantWhereInput = {
    AND?: apprenantWhereInput | apprenantWhereInput[]
    OR?: apprenantWhereInput[]
    NOT?: apprenantWhereInput | apprenantWhereInput[]
    id_apprenant?: IntFilter<"apprenant"> | number
    nom?: StringFilter<"apprenant"> | string
    prenom?: StringFilter<"apprenant"> | string
    email?: StringFilter<"apprenant"> | string
    password?: StringFilter<"apprenant"> | string
    referentiel?: EnumReferentielFilter<"apprenant"> | $Enums.Referentiel
    photoProfil?: StringNullableFilter<"apprenant"> | string | null
    veille?: VeilleListRelationFilter
    suiviCours?: SuiviCoursListRelationFilter
    Soumission?: SoumissionListRelationFilter
  }

  export type apprenantOrderByWithRelationInput = {
    id_apprenant?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    referentiel?: SortOrder
    photoProfil?: SortOrderInput | SortOrder
    veille?: veilleOrderByRelationAggregateInput
    suiviCours?: suiviCoursOrderByRelationAggregateInput
    Soumission?: SoumissionOrderByRelationAggregateInput
  }

  export type apprenantWhereUniqueInput = Prisma.AtLeast<{
    id_apprenant?: number
    email?: string
    AND?: apprenantWhereInput | apprenantWhereInput[]
    OR?: apprenantWhereInput[]
    NOT?: apprenantWhereInput | apprenantWhereInput[]
    nom?: StringFilter<"apprenant"> | string
    prenom?: StringFilter<"apprenant"> | string
    password?: StringFilter<"apprenant"> | string
    referentiel?: EnumReferentielFilter<"apprenant"> | $Enums.Referentiel
    photoProfil?: StringNullableFilter<"apprenant"> | string | null
    veille?: VeilleListRelationFilter
    suiviCours?: SuiviCoursListRelationFilter
    Soumission?: SoumissionListRelationFilter
  }, "id_apprenant" | "email">

  export type apprenantOrderByWithAggregationInput = {
    id_apprenant?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    referentiel?: SortOrder
    photoProfil?: SortOrderInput | SortOrder
    _count?: apprenantCountOrderByAggregateInput
    _avg?: apprenantAvgOrderByAggregateInput
    _max?: apprenantMaxOrderByAggregateInput
    _min?: apprenantMinOrderByAggregateInput
    _sum?: apprenantSumOrderByAggregateInput
  }

  export type apprenantScalarWhereWithAggregatesInput = {
    AND?: apprenantScalarWhereWithAggregatesInput | apprenantScalarWhereWithAggregatesInput[]
    OR?: apprenantScalarWhereWithAggregatesInput[]
    NOT?: apprenantScalarWhereWithAggregatesInput | apprenantScalarWhereWithAggregatesInput[]
    id_apprenant?: IntWithAggregatesFilter<"apprenant"> | number
    nom?: StringWithAggregatesFilter<"apprenant"> | string
    prenom?: StringWithAggregatesFilter<"apprenant"> | string
    email?: StringWithAggregatesFilter<"apprenant"> | string
    password?: StringWithAggregatesFilter<"apprenant"> | string
    referentiel?: EnumReferentielWithAggregatesFilter<"apprenant"> | $Enums.Referentiel
    photoProfil?: StringNullableWithAggregatesFilter<"apprenant"> | string | null
  }

  export type suiviCoursWhereInput = {
    AND?: suiviCoursWhereInput | suiviCoursWhereInput[]
    OR?: suiviCoursWhereInput[]
    NOT?: suiviCoursWhereInput | suiviCoursWhereInput[]
    id_suiviCours?: IntFilter<"suiviCours"> | number
    dateDebut?: DateTimeFilter<"suiviCours"> | Date | string
    dateFin?: DateTimeNullableFilter<"suiviCours"> | Date | string | null
    pourcentage?: DecimalFilter<"suiviCours"> | Decimal | DecimalJsLike | number | string
    id_apprenant?: IntFilter<"suiviCours"> | number
    id_cours?: IntFilter<"suiviCours"> | number
    apprenant?: XOR<ApprenantScalarRelationFilter, apprenantWhereInput>
    cours?: XOR<CoursScalarRelationFilter, coursWhereInput>
  }

  export type suiviCoursOrderByWithRelationInput = {
    id_suiviCours?: SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrderInput | SortOrder
    pourcentage?: SortOrder
    id_apprenant?: SortOrder
    id_cours?: SortOrder
    apprenant?: apprenantOrderByWithRelationInput
    cours?: coursOrderByWithRelationInput
  }

  export type suiviCoursWhereUniqueInput = Prisma.AtLeast<{
    id_suiviCours?: number
    AND?: suiviCoursWhereInput | suiviCoursWhereInput[]
    OR?: suiviCoursWhereInput[]
    NOT?: suiviCoursWhereInput | suiviCoursWhereInput[]
    dateDebut?: DateTimeFilter<"suiviCours"> | Date | string
    dateFin?: DateTimeNullableFilter<"suiviCours"> | Date | string | null
    pourcentage?: DecimalFilter<"suiviCours"> | Decimal | DecimalJsLike | number | string
    id_apprenant?: IntFilter<"suiviCours"> | number
    id_cours?: IntFilter<"suiviCours"> | number
    apprenant?: XOR<ApprenantScalarRelationFilter, apprenantWhereInput>
    cours?: XOR<CoursScalarRelationFilter, coursWhereInput>
  }, "id_suiviCours">

  export type suiviCoursOrderByWithAggregationInput = {
    id_suiviCours?: SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrderInput | SortOrder
    pourcentage?: SortOrder
    id_apprenant?: SortOrder
    id_cours?: SortOrder
    _count?: suiviCoursCountOrderByAggregateInput
    _avg?: suiviCoursAvgOrderByAggregateInput
    _max?: suiviCoursMaxOrderByAggregateInput
    _min?: suiviCoursMinOrderByAggregateInput
    _sum?: suiviCoursSumOrderByAggregateInput
  }

  export type suiviCoursScalarWhereWithAggregatesInput = {
    AND?: suiviCoursScalarWhereWithAggregatesInput | suiviCoursScalarWhereWithAggregatesInput[]
    OR?: suiviCoursScalarWhereWithAggregatesInput[]
    NOT?: suiviCoursScalarWhereWithAggregatesInput | suiviCoursScalarWhereWithAggregatesInput[]
    id_suiviCours?: IntWithAggregatesFilter<"suiviCours"> | number
    dateDebut?: DateTimeWithAggregatesFilter<"suiviCours"> | Date | string
    dateFin?: DateTimeNullableWithAggregatesFilter<"suiviCours"> | Date | string | null
    pourcentage?: DecimalWithAggregatesFilter<"suiviCours"> | Decimal | DecimalJsLike | number | string
    id_apprenant?: IntWithAggregatesFilter<"suiviCours"> | number
    id_cours?: IntWithAggregatesFilter<"suiviCours"> | number
  }

  export type coursWhereInput = {
    AND?: coursWhereInput | coursWhereInput[]
    OR?: coursWhereInput[]
    NOT?: coursWhereInput | coursWhereInput[]
    id_cours?: IntFilter<"cours"> | number
    categorie?: StringFilter<"cours"> | string
    titre?: StringFilter<"cours"> | string
    description?: StringFilter<"cours"> | string
    photoCours?: StringNullableFilter<"cours"> | string | null
    dateCreation?: DateTimeFilter<"cours"> | Date | string
    id_formateur?: IntFilter<"cours"> | number
    formateur?: XOR<FormateurScalarRelationFilter, formateurWhereInput>
    suiviCours?: SuiviCoursListRelationFilter
    chapitre?: ChapitreListRelationFilter
  }

  export type coursOrderByWithRelationInput = {
    id_cours?: SortOrder
    categorie?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    photoCours?: SortOrderInput | SortOrder
    dateCreation?: SortOrder
    id_formateur?: SortOrder
    formateur?: formateurOrderByWithRelationInput
    suiviCours?: suiviCoursOrderByRelationAggregateInput
    chapitre?: chapitreOrderByRelationAggregateInput
  }

  export type coursWhereUniqueInput = Prisma.AtLeast<{
    id_cours?: number
    AND?: coursWhereInput | coursWhereInput[]
    OR?: coursWhereInput[]
    NOT?: coursWhereInput | coursWhereInput[]
    categorie?: StringFilter<"cours"> | string
    titre?: StringFilter<"cours"> | string
    description?: StringFilter<"cours"> | string
    photoCours?: StringNullableFilter<"cours"> | string | null
    dateCreation?: DateTimeFilter<"cours"> | Date | string
    id_formateur?: IntFilter<"cours"> | number
    formateur?: XOR<FormateurScalarRelationFilter, formateurWhereInput>
    suiviCours?: SuiviCoursListRelationFilter
    chapitre?: ChapitreListRelationFilter
  }, "id_cours">

  export type coursOrderByWithAggregationInput = {
    id_cours?: SortOrder
    categorie?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    photoCours?: SortOrderInput | SortOrder
    dateCreation?: SortOrder
    id_formateur?: SortOrder
    _count?: coursCountOrderByAggregateInput
    _avg?: coursAvgOrderByAggregateInput
    _max?: coursMaxOrderByAggregateInput
    _min?: coursMinOrderByAggregateInput
    _sum?: coursSumOrderByAggregateInput
  }

  export type coursScalarWhereWithAggregatesInput = {
    AND?: coursScalarWhereWithAggregatesInput | coursScalarWhereWithAggregatesInput[]
    OR?: coursScalarWhereWithAggregatesInput[]
    NOT?: coursScalarWhereWithAggregatesInput | coursScalarWhereWithAggregatesInput[]
    id_cours?: IntWithAggregatesFilter<"cours"> | number
    categorie?: StringWithAggregatesFilter<"cours"> | string
    titre?: StringWithAggregatesFilter<"cours"> | string
    description?: StringWithAggregatesFilter<"cours"> | string
    photoCours?: StringNullableWithAggregatesFilter<"cours"> | string | null
    dateCreation?: DateTimeWithAggregatesFilter<"cours"> | Date | string
    id_formateur?: IntWithAggregatesFilter<"cours"> | number
  }

  export type chapitreWhereInput = {
    AND?: chapitreWhereInput | chapitreWhereInput[]
    OR?: chapitreWhereInput[]
    NOT?: chapitreWhereInput | chapitreWhereInput[]
    id_chapitre?: IntFilter<"chapitre"> | number
    titre?: StringFilter<"chapitre"> | string
    numeroOrdre?: IntFilter<"chapitre"> | number
    id_cours?: IntFilter<"chapitre"> | number
    cours?: XOR<CoursScalarRelationFilter, coursWhereInput>
    lecon?: LeconListRelationFilter
  }

  export type chapitreOrderByWithRelationInput = {
    id_chapitre?: SortOrder
    titre?: SortOrder
    numeroOrdre?: SortOrder
    id_cours?: SortOrder
    cours?: coursOrderByWithRelationInput
    lecon?: leconOrderByRelationAggregateInput
  }

  export type chapitreWhereUniqueInput = Prisma.AtLeast<{
    id_chapitre?: number
    AND?: chapitreWhereInput | chapitreWhereInput[]
    OR?: chapitreWhereInput[]
    NOT?: chapitreWhereInput | chapitreWhereInput[]
    titre?: StringFilter<"chapitre"> | string
    numeroOrdre?: IntFilter<"chapitre"> | number
    id_cours?: IntFilter<"chapitre"> | number
    cours?: XOR<CoursScalarRelationFilter, coursWhereInput>
    lecon?: LeconListRelationFilter
  }, "id_chapitre">

  export type chapitreOrderByWithAggregationInput = {
    id_chapitre?: SortOrder
    titre?: SortOrder
    numeroOrdre?: SortOrder
    id_cours?: SortOrder
    _count?: chapitreCountOrderByAggregateInput
    _avg?: chapitreAvgOrderByAggregateInput
    _max?: chapitreMaxOrderByAggregateInput
    _min?: chapitreMinOrderByAggregateInput
    _sum?: chapitreSumOrderByAggregateInput
  }

  export type chapitreScalarWhereWithAggregatesInput = {
    AND?: chapitreScalarWhereWithAggregatesInput | chapitreScalarWhereWithAggregatesInput[]
    OR?: chapitreScalarWhereWithAggregatesInput[]
    NOT?: chapitreScalarWhereWithAggregatesInput | chapitreScalarWhereWithAggregatesInput[]
    id_chapitre?: IntWithAggregatesFilter<"chapitre"> | number
    titre?: StringWithAggregatesFilter<"chapitre"> | string
    numeroOrdre?: IntWithAggregatesFilter<"chapitre"> | number
    id_cours?: IntWithAggregatesFilter<"chapitre"> | number
  }

  export type leconWhereInput = {
    AND?: leconWhereInput | leconWhereInput[]
    OR?: leconWhereInput[]
    NOT?: leconWhereInput | leconWhereInput[]
    id_lecon?: IntFilter<"lecon"> | number
    titre?: StringFilter<"lecon"> | string
    contenuTextuel?: StringNullableFilter<"lecon"> | string | null
    contenuVideo?: StringNullableFilter<"lecon"> | string | null
    numeroOrdre?: IntFilter<"lecon"> | number
    id_chapitre?: IntFilter<"lecon"> | number
    chapitre?: XOR<ChapitreScalarRelationFilter, chapitreWhereInput>
  }

  export type leconOrderByWithRelationInput = {
    id_lecon?: SortOrder
    titre?: SortOrder
    contenuTextuel?: SortOrderInput | SortOrder
    contenuVideo?: SortOrderInput | SortOrder
    numeroOrdre?: SortOrder
    id_chapitre?: SortOrder
    chapitre?: chapitreOrderByWithRelationInput
  }

  export type leconWhereUniqueInput = Prisma.AtLeast<{
    id_lecon?: number
    AND?: leconWhereInput | leconWhereInput[]
    OR?: leconWhereInput[]
    NOT?: leconWhereInput | leconWhereInput[]
    titre?: StringFilter<"lecon"> | string
    contenuTextuel?: StringNullableFilter<"lecon"> | string | null
    contenuVideo?: StringNullableFilter<"lecon"> | string | null
    numeroOrdre?: IntFilter<"lecon"> | number
    id_chapitre?: IntFilter<"lecon"> | number
    chapitre?: XOR<ChapitreScalarRelationFilter, chapitreWhereInput>
  }, "id_lecon">

  export type leconOrderByWithAggregationInput = {
    id_lecon?: SortOrder
    titre?: SortOrder
    contenuTextuel?: SortOrderInput | SortOrder
    contenuVideo?: SortOrderInput | SortOrder
    numeroOrdre?: SortOrder
    id_chapitre?: SortOrder
    _count?: leconCountOrderByAggregateInput
    _avg?: leconAvgOrderByAggregateInput
    _max?: leconMaxOrderByAggregateInput
    _min?: leconMinOrderByAggregateInput
    _sum?: leconSumOrderByAggregateInput
  }

  export type leconScalarWhereWithAggregatesInput = {
    AND?: leconScalarWhereWithAggregatesInput | leconScalarWhereWithAggregatesInput[]
    OR?: leconScalarWhereWithAggregatesInput[]
    NOT?: leconScalarWhereWithAggregatesInput | leconScalarWhereWithAggregatesInput[]
    id_lecon?: IntWithAggregatesFilter<"lecon"> | number
    titre?: StringWithAggregatesFilter<"lecon"> | string
    contenuTextuel?: StringNullableWithAggregatesFilter<"lecon"> | string | null
    contenuVideo?: StringNullableWithAggregatesFilter<"lecon"> | string | null
    numeroOrdre?: IntWithAggregatesFilter<"lecon"> | number
    id_chapitre?: IntWithAggregatesFilter<"lecon"> | number
  }

  export type veilleWhereInput = {
    AND?: veilleWhereInput | veilleWhereInput[]
    OR?: veilleWhereInput[]
    NOT?: veilleWhereInput | veilleWhereInput[]
    id_veille?: IntFilter<"veille"> | number
    titre?: StringFilter<"veille"> | string
    lien_docDonnee?: StringFilter<"veille"> | string
    lien_docRendu?: StringNullableFilter<"veille"> | string | null
    date_creation?: DateTimeFilter<"veille"> | Date | string
    date_fin?: DateTimeFilter<"veille"> | Date | string
    referentiel?: EnumReferentielFilter<"veille"> | $Enums.Referentiel
    id_apprenant?: IntNullableFilter<"veille"> | number | null
    id_formateur?: IntFilter<"veille"> | number
    formateur?: XOR<FormateurScalarRelationFilter, formateurWhereInput>
    apprenant?: XOR<ApprenantNullableScalarRelationFilter, apprenantWhereInput> | null
    Soumission?: SoumissionListRelationFilter
  }

  export type veilleOrderByWithRelationInput = {
    id_veille?: SortOrder
    titre?: SortOrder
    lien_docDonnee?: SortOrder
    lien_docRendu?: SortOrderInput | SortOrder
    date_creation?: SortOrder
    date_fin?: SortOrder
    referentiel?: SortOrder
    id_apprenant?: SortOrderInput | SortOrder
    id_formateur?: SortOrder
    formateur?: formateurOrderByWithRelationInput
    apprenant?: apprenantOrderByWithRelationInput
    Soumission?: SoumissionOrderByRelationAggregateInput
  }

  export type veilleWhereUniqueInput = Prisma.AtLeast<{
    id_veille?: number
    AND?: veilleWhereInput | veilleWhereInput[]
    OR?: veilleWhereInput[]
    NOT?: veilleWhereInput | veilleWhereInput[]
    titre?: StringFilter<"veille"> | string
    lien_docDonnee?: StringFilter<"veille"> | string
    lien_docRendu?: StringNullableFilter<"veille"> | string | null
    date_creation?: DateTimeFilter<"veille"> | Date | string
    date_fin?: DateTimeFilter<"veille"> | Date | string
    referentiel?: EnumReferentielFilter<"veille"> | $Enums.Referentiel
    id_apprenant?: IntNullableFilter<"veille"> | number | null
    id_formateur?: IntFilter<"veille"> | number
    formateur?: XOR<FormateurScalarRelationFilter, formateurWhereInput>
    apprenant?: XOR<ApprenantNullableScalarRelationFilter, apprenantWhereInput> | null
    Soumission?: SoumissionListRelationFilter
  }, "id_veille">

  export type veilleOrderByWithAggregationInput = {
    id_veille?: SortOrder
    titre?: SortOrder
    lien_docDonnee?: SortOrder
    lien_docRendu?: SortOrderInput | SortOrder
    date_creation?: SortOrder
    date_fin?: SortOrder
    referentiel?: SortOrder
    id_apprenant?: SortOrderInput | SortOrder
    id_formateur?: SortOrder
    _count?: veilleCountOrderByAggregateInput
    _avg?: veilleAvgOrderByAggregateInput
    _max?: veilleMaxOrderByAggregateInput
    _min?: veilleMinOrderByAggregateInput
    _sum?: veilleSumOrderByAggregateInput
  }

  export type veilleScalarWhereWithAggregatesInput = {
    AND?: veilleScalarWhereWithAggregatesInput | veilleScalarWhereWithAggregatesInput[]
    OR?: veilleScalarWhereWithAggregatesInput[]
    NOT?: veilleScalarWhereWithAggregatesInput | veilleScalarWhereWithAggregatesInput[]
    id_veille?: IntWithAggregatesFilter<"veille"> | number
    titre?: StringWithAggregatesFilter<"veille"> | string
    lien_docDonnee?: StringWithAggregatesFilter<"veille"> | string
    lien_docRendu?: StringNullableWithAggregatesFilter<"veille"> | string | null
    date_creation?: DateTimeWithAggregatesFilter<"veille"> | Date | string
    date_fin?: DateTimeWithAggregatesFilter<"veille"> | Date | string
    referentiel?: EnumReferentielWithAggregatesFilter<"veille"> | $Enums.Referentiel
    id_apprenant?: IntNullableWithAggregatesFilter<"veille"> | number | null
    id_formateur?: IntWithAggregatesFilter<"veille"> | number
  }

  export type SoumissionWhereInput = {
    AND?: SoumissionWhereInput | SoumissionWhereInput[]
    OR?: SoumissionWhereInput[]
    NOT?: SoumissionWhereInput | SoumissionWhereInput[]
    id_soumission?: IntFilter<"Soumission"> | number
    id_veille?: IntFilter<"Soumission"> | number
    id_apprenant?: IntFilter<"Soumission"> | number
    lien_soumission?: StringFilter<"Soumission"> | string
    date_soumission?: DateTimeFilter<"Soumission"> | Date | string
    veille?: XOR<VeilleScalarRelationFilter, veilleWhereInput>
    apprenant?: XOR<ApprenantScalarRelationFilter, apprenantWhereInput>
  }

  export type SoumissionOrderByWithRelationInput = {
    id_soumission?: SortOrder
    id_veille?: SortOrder
    id_apprenant?: SortOrder
    lien_soumission?: SortOrder
    date_soumission?: SortOrder
    veille?: veilleOrderByWithRelationInput
    apprenant?: apprenantOrderByWithRelationInput
  }

  export type SoumissionWhereUniqueInput = Prisma.AtLeast<{
    id_soumission?: number
    AND?: SoumissionWhereInput | SoumissionWhereInput[]
    OR?: SoumissionWhereInput[]
    NOT?: SoumissionWhereInput | SoumissionWhereInput[]
    id_veille?: IntFilter<"Soumission"> | number
    id_apprenant?: IntFilter<"Soumission"> | number
    lien_soumission?: StringFilter<"Soumission"> | string
    date_soumission?: DateTimeFilter<"Soumission"> | Date | string
    veille?: XOR<VeilleScalarRelationFilter, veilleWhereInput>
    apprenant?: XOR<ApprenantScalarRelationFilter, apprenantWhereInput>
  }, "id_soumission">

  export type SoumissionOrderByWithAggregationInput = {
    id_soumission?: SortOrder
    id_veille?: SortOrder
    id_apprenant?: SortOrder
    lien_soumission?: SortOrder
    date_soumission?: SortOrder
    _count?: SoumissionCountOrderByAggregateInput
    _avg?: SoumissionAvgOrderByAggregateInput
    _max?: SoumissionMaxOrderByAggregateInput
    _min?: SoumissionMinOrderByAggregateInput
    _sum?: SoumissionSumOrderByAggregateInput
  }

  export type SoumissionScalarWhereWithAggregatesInput = {
    AND?: SoumissionScalarWhereWithAggregatesInput | SoumissionScalarWhereWithAggregatesInput[]
    OR?: SoumissionScalarWhereWithAggregatesInput[]
    NOT?: SoumissionScalarWhereWithAggregatesInput | SoumissionScalarWhereWithAggregatesInput[]
    id_soumission?: IntWithAggregatesFilter<"Soumission"> | number
    id_veille?: IntWithAggregatesFilter<"Soumission"> | number
    id_apprenant?: IntWithAggregatesFilter<"Soumission"> | number
    lien_soumission?: StringWithAggregatesFilter<"Soumission"> | string
    date_soumission?: DateTimeWithAggregatesFilter<"Soumission"> | Date | string
  }

  export type formateurCreateInput = {
    nom: string
    prenom: string
    email: string
    password?: string
    referentiel: $Enums.Referentiel
    cours?: coursCreateNestedManyWithoutFormateurInput
    veille?: veilleCreateNestedManyWithoutFormateurInput
  }

  export type formateurUncheckedCreateInput = {
    id_formateur?: number
    nom: string
    prenom: string
    email: string
    password?: string
    referentiel: $Enums.Referentiel
    cours?: coursUncheckedCreateNestedManyWithoutFormateurInput
    veille?: veilleUncheckedCreateNestedManyWithoutFormateurInput
  }

  export type formateurUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referentiel?: EnumReferentielFieldUpdateOperationsInput | $Enums.Referentiel
    cours?: coursUpdateManyWithoutFormateurNestedInput
    veille?: veilleUpdateManyWithoutFormateurNestedInput
  }

  export type formateurUncheckedUpdateInput = {
    id_formateur?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referentiel?: EnumReferentielFieldUpdateOperationsInput | $Enums.Referentiel
    cours?: coursUncheckedUpdateManyWithoutFormateurNestedInput
    veille?: veilleUncheckedUpdateManyWithoutFormateurNestedInput
  }

  export type formateurCreateManyInput = {
    id_formateur?: number
    nom: string
    prenom: string
    email: string
    password?: string
    referentiel: $Enums.Referentiel
  }

  export type formateurUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referentiel?: EnumReferentielFieldUpdateOperationsInput | $Enums.Referentiel
  }

  export type formateurUncheckedUpdateManyInput = {
    id_formateur?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referentiel?: EnumReferentielFieldUpdateOperationsInput | $Enums.Referentiel
  }

  export type administrateurCreateInput = {
    nom: string
    prenom: string
    email: string
    password: string
  }

  export type administrateurUncheckedCreateInput = {
    id_administrateur?: number
    nom: string
    prenom: string
    email: string
    password: string
  }

  export type administrateurUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type administrateurUncheckedUpdateInput = {
    id_administrateur?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type administrateurCreateManyInput = {
    id_administrateur?: number
    nom: string
    prenom: string
    email: string
    password: string
  }

  export type administrateurUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type administrateurUncheckedUpdateManyInput = {
    id_administrateur?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type apprenantCreateInput = {
    nom: string
    prenom: string
    email: string
    password?: string
    referentiel: $Enums.Referentiel
    photoProfil?: string | null
    veille?: veilleCreateNestedManyWithoutApprenantInput
    suiviCours?: suiviCoursCreateNestedManyWithoutApprenantInput
    Soumission?: SoumissionCreateNestedManyWithoutApprenantInput
  }

  export type apprenantUncheckedCreateInput = {
    id_apprenant?: number
    nom: string
    prenom: string
    email: string
    password?: string
    referentiel: $Enums.Referentiel
    photoProfil?: string | null
    veille?: veilleUncheckedCreateNestedManyWithoutApprenantInput
    suiviCours?: suiviCoursUncheckedCreateNestedManyWithoutApprenantInput
    Soumission?: SoumissionUncheckedCreateNestedManyWithoutApprenantInput
  }

  export type apprenantUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referentiel?: EnumReferentielFieldUpdateOperationsInput | $Enums.Referentiel
    photoProfil?: NullableStringFieldUpdateOperationsInput | string | null
    veille?: veilleUpdateManyWithoutApprenantNestedInput
    suiviCours?: suiviCoursUpdateManyWithoutApprenantNestedInput
    Soumission?: SoumissionUpdateManyWithoutApprenantNestedInput
  }

  export type apprenantUncheckedUpdateInput = {
    id_apprenant?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referentiel?: EnumReferentielFieldUpdateOperationsInput | $Enums.Referentiel
    photoProfil?: NullableStringFieldUpdateOperationsInput | string | null
    veille?: veilleUncheckedUpdateManyWithoutApprenantNestedInput
    suiviCours?: suiviCoursUncheckedUpdateManyWithoutApprenantNestedInput
    Soumission?: SoumissionUncheckedUpdateManyWithoutApprenantNestedInput
  }

  export type apprenantCreateManyInput = {
    id_apprenant?: number
    nom: string
    prenom: string
    email: string
    password?: string
    referentiel: $Enums.Referentiel
    photoProfil?: string | null
  }

  export type apprenantUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referentiel?: EnumReferentielFieldUpdateOperationsInput | $Enums.Referentiel
    photoProfil?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type apprenantUncheckedUpdateManyInput = {
    id_apprenant?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referentiel?: EnumReferentielFieldUpdateOperationsInput | $Enums.Referentiel
    photoProfil?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type suiviCoursCreateInput = {
    dateDebut: Date | string
    dateFin?: Date | string | null
    pourcentage: Decimal | DecimalJsLike | number | string
    apprenant: apprenantCreateNestedOneWithoutSuiviCoursInput
    cours: coursCreateNestedOneWithoutSuiviCoursInput
  }

  export type suiviCoursUncheckedCreateInput = {
    id_suiviCours?: number
    dateDebut: Date | string
    dateFin?: Date | string | null
    pourcentage: Decimal | DecimalJsLike | number | string
    id_apprenant: number
    id_cours: number
  }

  export type suiviCoursUpdateInput = {
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pourcentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    apprenant?: apprenantUpdateOneRequiredWithoutSuiviCoursNestedInput
    cours?: coursUpdateOneRequiredWithoutSuiviCoursNestedInput
  }

  export type suiviCoursUncheckedUpdateInput = {
    id_suiviCours?: IntFieldUpdateOperationsInput | number
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pourcentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_apprenant?: IntFieldUpdateOperationsInput | number
    id_cours?: IntFieldUpdateOperationsInput | number
  }

  export type suiviCoursCreateManyInput = {
    id_suiviCours?: number
    dateDebut: Date | string
    dateFin?: Date | string | null
    pourcentage: Decimal | DecimalJsLike | number | string
    id_apprenant: number
    id_cours: number
  }

  export type suiviCoursUpdateManyMutationInput = {
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pourcentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type suiviCoursUncheckedUpdateManyInput = {
    id_suiviCours?: IntFieldUpdateOperationsInput | number
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pourcentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_apprenant?: IntFieldUpdateOperationsInput | number
    id_cours?: IntFieldUpdateOperationsInput | number
  }

  export type coursCreateInput = {
    categorie: string
    titre: string
    description: string
    photoCours?: string | null
    dateCreation: Date | string
    formateur: formateurCreateNestedOneWithoutCoursInput
    suiviCours?: suiviCoursCreateNestedManyWithoutCoursInput
    chapitre?: chapitreCreateNestedManyWithoutCoursInput
  }

  export type coursUncheckedCreateInput = {
    id_cours?: number
    categorie: string
    titre: string
    description: string
    photoCours?: string | null
    dateCreation: Date | string
    id_formateur: number
    suiviCours?: suiviCoursUncheckedCreateNestedManyWithoutCoursInput
    chapitre?: chapitreUncheckedCreateNestedManyWithoutCoursInput
  }

  export type coursUpdateInput = {
    categorie?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoCours?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    formateur?: formateurUpdateOneRequiredWithoutCoursNestedInput
    suiviCours?: suiviCoursUpdateManyWithoutCoursNestedInput
    chapitre?: chapitreUpdateManyWithoutCoursNestedInput
  }

  export type coursUncheckedUpdateInput = {
    id_cours?: IntFieldUpdateOperationsInput | number
    categorie?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoCours?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    id_formateur?: IntFieldUpdateOperationsInput | number
    suiviCours?: suiviCoursUncheckedUpdateManyWithoutCoursNestedInput
    chapitre?: chapitreUncheckedUpdateManyWithoutCoursNestedInput
  }

  export type coursCreateManyInput = {
    id_cours?: number
    categorie: string
    titre: string
    description: string
    photoCours?: string | null
    dateCreation: Date | string
    id_formateur: number
  }

  export type coursUpdateManyMutationInput = {
    categorie?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoCours?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type coursUncheckedUpdateManyInput = {
    id_cours?: IntFieldUpdateOperationsInput | number
    categorie?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoCours?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    id_formateur?: IntFieldUpdateOperationsInput | number
  }

  export type chapitreCreateInput = {
    titre: string
    numeroOrdre: number
    cours: coursCreateNestedOneWithoutChapitreInput
    lecon?: leconCreateNestedManyWithoutChapitreInput
  }

  export type chapitreUncheckedCreateInput = {
    id_chapitre?: number
    titre: string
    numeroOrdre: number
    id_cours: number
    lecon?: leconUncheckedCreateNestedManyWithoutChapitreInput
  }

  export type chapitreUpdateInput = {
    titre?: StringFieldUpdateOperationsInput | string
    numeroOrdre?: IntFieldUpdateOperationsInput | number
    cours?: coursUpdateOneRequiredWithoutChapitreNestedInput
    lecon?: leconUpdateManyWithoutChapitreNestedInput
  }

  export type chapitreUncheckedUpdateInput = {
    id_chapitre?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    numeroOrdre?: IntFieldUpdateOperationsInput | number
    id_cours?: IntFieldUpdateOperationsInput | number
    lecon?: leconUncheckedUpdateManyWithoutChapitreNestedInput
  }

  export type chapitreCreateManyInput = {
    id_chapitre?: number
    titre: string
    numeroOrdre: number
    id_cours: number
  }

  export type chapitreUpdateManyMutationInput = {
    titre?: StringFieldUpdateOperationsInput | string
    numeroOrdre?: IntFieldUpdateOperationsInput | number
  }

  export type chapitreUncheckedUpdateManyInput = {
    id_chapitre?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    numeroOrdre?: IntFieldUpdateOperationsInput | number
    id_cours?: IntFieldUpdateOperationsInput | number
  }

  export type leconCreateInput = {
    titre: string
    contenuTextuel?: string | null
    contenuVideo?: string | null
    numeroOrdre: number
    chapitre: chapitreCreateNestedOneWithoutLeconInput
  }

  export type leconUncheckedCreateInput = {
    id_lecon?: number
    titre: string
    contenuTextuel?: string | null
    contenuVideo?: string | null
    numeroOrdre: number
    id_chapitre: number
  }

  export type leconUpdateInput = {
    titre?: StringFieldUpdateOperationsInput | string
    contenuTextuel?: NullableStringFieldUpdateOperationsInput | string | null
    contenuVideo?: NullableStringFieldUpdateOperationsInput | string | null
    numeroOrdre?: IntFieldUpdateOperationsInput | number
    chapitre?: chapitreUpdateOneRequiredWithoutLeconNestedInput
  }

  export type leconUncheckedUpdateInput = {
    id_lecon?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    contenuTextuel?: NullableStringFieldUpdateOperationsInput | string | null
    contenuVideo?: NullableStringFieldUpdateOperationsInput | string | null
    numeroOrdre?: IntFieldUpdateOperationsInput | number
    id_chapitre?: IntFieldUpdateOperationsInput | number
  }

  export type leconCreateManyInput = {
    id_lecon?: number
    titre: string
    contenuTextuel?: string | null
    contenuVideo?: string | null
    numeroOrdre: number
    id_chapitre: number
  }

  export type leconUpdateManyMutationInput = {
    titre?: StringFieldUpdateOperationsInput | string
    contenuTextuel?: NullableStringFieldUpdateOperationsInput | string | null
    contenuVideo?: NullableStringFieldUpdateOperationsInput | string | null
    numeroOrdre?: IntFieldUpdateOperationsInput | number
  }

  export type leconUncheckedUpdateManyInput = {
    id_lecon?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    contenuTextuel?: NullableStringFieldUpdateOperationsInput | string | null
    contenuVideo?: NullableStringFieldUpdateOperationsInput | string | null
    numeroOrdre?: IntFieldUpdateOperationsInput | number
    id_chapitre?: IntFieldUpdateOperationsInput | number
  }

  export type veilleCreateInput = {
    titre: string
    lien_docDonnee: string
    lien_docRendu?: string | null
    date_creation: Date | string
    date_fin: Date | string
    referentiel: $Enums.Referentiel
    formateur: formateurCreateNestedOneWithoutVeilleInput
    apprenant?: apprenantCreateNestedOneWithoutVeilleInput
    Soumission?: SoumissionCreateNestedManyWithoutVeilleInput
  }

  export type veilleUncheckedCreateInput = {
    id_veille?: number
    titre: string
    lien_docDonnee: string
    lien_docRendu?: string | null
    date_creation: Date | string
    date_fin: Date | string
    referentiel: $Enums.Referentiel
    id_apprenant?: number | null
    id_formateur: number
    Soumission?: SoumissionUncheckedCreateNestedManyWithoutVeilleInput
  }

  export type veilleUpdateInput = {
    titre?: StringFieldUpdateOperationsInput | string
    lien_docDonnee?: StringFieldUpdateOperationsInput | string
    lien_docRendu?: NullableStringFieldUpdateOperationsInput | string | null
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    referentiel?: EnumReferentielFieldUpdateOperationsInput | $Enums.Referentiel
    formateur?: formateurUpdateOneRequiredWithoutVeilleNestedInput
    apprenant?: apprenantUpdateOneWithoutVeilleNestedInput
    Soumission?: SoumissionUpdateManyWithoutVeilleNestedInput
  }

  export type veilleUncheckedUpdateInput = {
    id_veille?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    lien_docDonnee?: StringFieldUpdateOperationsInput | string
    lien_docRendu?: NullableStringFieldUpdateOperationsInput | string | null
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    referentiel?: EnumReferentielFieldUpdateOperationsInput | $Enums.Referentiel
    id_apprenant?: NullableIntFieldUpdateOperationsInput | number | null
    id_formateur?: IntFieldUpdateOperationsInput | number
    Soumission?: SoumissionUncheckedUpdateManyWithoutVeilleNestedInput
  }

  export type veilleCreateManyInput = {
    id_veille?: number
    titre: string
    lien_docDonnee: string
    lien_docRendu?: string | null
    date_creation: Date | string
    date_fin: Date | string
    referentiel: $Enums.Referentiel
    id_apprenant?: number | null
    id_formateur: number
  }

  export type veilleUpdateManyMutationInput = {
    titre?: StringFieldUpdateOperationsInput | string
    lien_docDonnee?: StringFieldUpdateOperationsInput | string
    lien_docRendu?: NullableStringFieldUpdateOperationsInput | string | null
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    referentiel?: EnumReferentielFieldUpdateOperationsInput | $Enums.Referentiel
  }

  export type veilleUncheckedUpdateManyInput = {
    id_veille?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    lien_docDonnee?: StringFieldUpdateOperationsInput | string
    lien_docRendu?: NullableStringFieldUpdateOperationsInput | string | null
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    referentiel?: EnumReferentielFieldUpdateOperationsInput | $Enums.Referentiel
    id_apprenant?: NullableIntFieldUpdateOperationsInput | number | null
    id_formateur?: IntFieldUpdateOperationsInput | number
  }

  export type SoumissionCreateInput = {
    lien_soumission: string
    date_soumission?: Date | string
    veille: veilleCreateNestedOneWithoutSoumissionInput
    apprenant: apprenantCreateNestedOneWithoutSoumissionInput
  }

  export type SoumissionUncheckedCreateInput = {
    id_soumission?: number
    id_veille: number
    id_apprenant: number
    lien_soumission: string
    date_soumission?: Date | string
  }

  export type SoumissionUpdateInput = {
    lien_soumission?: StringFieldUpdateOperationsInput | string
    date_soumission?: DateTimeFieldUpdateOperationsInput | Date | string
    veille?: veilleUpdateOneRequiredWithoutSoumissionNestedInput
    apprenant?: apprenantUpdateOneRequiredWithoutSoumissionNestedInput
  }

  export type SoumissionUncheckedUpdateInput = {
    id_soumission?: IntFieldUpdateOperationsInput | number
    id_veille?: IntFieldUpdateOperationsInput | number
    id_apprenant?: IntFieldUpdateOperationsInput | number
    lien_soumission?: StringFieldUpdateOperationsInput | string
    date_soumission?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SoumissionCreateManyInput = {
    id_soumission?: number
    id_veille: number
    id_apprenant: number
    lien_soumission: string
    date_soumission?: Date | string
  }

  export type SoumissionUpdateManyMutationInput = {
    lien_soumission?: StringFieldUpdateOperationsInput | string
    date_soumission?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SoumissionUncheckedUpdateManyInput = {
    id_soumission?: IntFieldUpdateOperationsInput | number
    id_veille?: IntFieldUpdateOperationsInput | number
    id_apprenant?: IntFieldUpdateOperationsInput | number
    lien_soumission?: StringFieldUpdateOperationsInput | string
    date_soumission?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumReferentielFilter<$PrismaModel = never> = {
    equals?: $Enums.Referentiel | EnumReferentielFieldRefInput<$PrismaModel>
    in?: $Enums.Referentiel[] | ListEnumReferentielFieldRefInput<$PrismaModel>
    notIn?: $Enums.Referentiel[] | ListEnumReferentielFieldRefInput<$PrismaModel>
    not?: NestedEnumReferentielFilter<$PrismaModel> | $Enums.Referentiel
  }

  export type CoursListRelationFilter = {
    every?: coursWhereInput
    some?: coursWhereInput
    none?: coursWhereInput
  }

  export type VeilleListRelationFilter = {
    every?: veilleWhereInput
    some?: veilleWhereInput
    none?: veilleWhereInput
  }

  export type coursOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type veilleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type formateurCountOrderByAggregateInput = {
    id_formateur?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    referentiel?: SortOrder
  }

  export type formateurAvgOrderByAggregateInput = {
    id_formateur?: SortOrder
  }

  export type formateurMaxOrderByAggregateInput = {
    id_formateur?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    referentiel?: SortOrder
  }

  export type formateurMinOrderByAggregateInput = {
    id_formateur?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    referentiel?: SortOrder
  }

  export type formateurSumOrderByAggregateInput = {
    id_formateur?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumReferentielWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Referentiel | EnumReferentielFieldRefInput<$PrismaModel>
    in?: $Enums.Referentiel[] | ListEnumReferentielFieldRefInput<$PrismaModel>
    notIn?: $Enums.Referentiel[] | ListEnumReferentielFieldRefInput<$PrismaModel>
    not?: NestedEnumReferentielWithAggregatesFilter<$PrismaModel> | $Enums.Referentiel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReferentielFilter<$PrismaModel>
    _max?: NestedEnumReferentielFilter<$PrismaModel>
  }

  export type administrateurCountOrderByAggregateInput = {
    id_administrateur?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type administrateurAvgOrderByAggregateInput = {
    id_administrateur?: SortOrder
  }

  export type administrateurMaxOrderByAggregateInput = {
    id_administrateur?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type administrateurMinOrderByAggregateInput = {
    id_administrateur?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type administrateurSumOrderByAggregateInput = {
    id_administrateur?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SuiviCoursListRelationFilter = {
    every?: suiviCoursWhereInput
    some?: suiviCoursWhereInput
    none?: suiviCoursWhereInput
  }

  export type SoumissionListRelationFilter = {
    every?: SoumissionWhereInput
    some?: SoumissionWhereInput
    none?: SoumissionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type suiviCoursOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SoumissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type apprenantCountOrderByAggregateInput = {
    id_apprenant?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    referentiel?: SortOrder
    photoProfil?: SortOrder
  }

  export type apprenantAvgOrderByAggregateInput = {
    id_apprenant?: SortOrder
  }

  export type apprenantMaxOrderByAggregateInput = {
    id_apprenant?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    referentiel?: SortOrder
    photoProfil?: SortOrder
  }

  export type apprenantMinOrderByAggregateInput = {
    id_apprenant?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    referentiel?: SortOrder
    photoProfil?: SortOrder
  }

  export type apprenantSumOrderByAggregateInput = {
    id_apprenant?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ApprenantScalarRelationFilter = {
    is?: apprenantWhereInput
    isNot?: apprenantWhereInput
  }

  export type CoursScalarRelationFilter = {
    is?: coursWhereInput
    isNot?: coursWhereInput
  }

  export type suiviCoursCountOrderByAggregateInput = {
    id_suiviCours?: SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrder
    pourcentage?: SortOrder
    id_apprenant?: SortOrder
    id_cours?: SortOrder
  }

  export type suiviCoursAvgOrderByAggregateInput = {
    id_suiviCours?: SortOrder
    pourcentage?: SortOrder
    id_apprenant?: SortOrder
    id_cours?: SortOrder
  }

  export type suiviCoursMaxOrderByAggregateInput = {
    id_suiviCours?: SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrder
    pourcentage?: SortOrder
    id_apprenant?: SortOrder
    id_cours?: SortOrder
  }

  export type suiviCoursMinOrderByAggregateInput = {
    id_suiviCours?: SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrder
    pourcentage?: SortOrder
    id_apprenant?: SortOrder
    id_cours?: SortOrder
  }

  export type suiviCoursSumOrderByAggregateInput = {
    id_suiviCours?: SortOrder
    pourcentage?: SortOrder
    id_apprenant?: SortOrder
    id_cours?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type FormateurScalarRelationFilter = {
    is?: formateurWhereInput
    isNot?: formateurWhereInput
  }

  export type ChapitreListRelationFilter = {
    every?: chapitreWhereInput
    some?: chapitreWhereInput
    none?: chapitreWhereInput
  }

  export type chapitreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type coursCountOrderByAggregateInput = {
    id_cours?: SortOrder
    categorie?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    photoCours?: SortOrder
    dateCreation?: SortOrder
    id_formateur?: SortOrder
  }

  export type coursAvgOrderByAggregateInput = {
    id_cours?: SortOrder
    id_formateur?: SortOrder
  }

  export type coursMaxOrderByAggregateInput = {
    id_cours?: SortOrder
    categorie?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    photoCours?: SortOrder
    dateCreation?: SortOrder
    id_formateur?: SortOrder
  }

  export type coursMinOrderByAggregateInput = {
    id_cours?: SortOrder
    categorie?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    photoCours?: SortOrder
    dateCreation?: SortOrder
    id_formateur?: SortOrder
  }

  export type coursSumOrderByAggregateInput = {
    id_cours?: SortOrder
    id_formateur?: SortOrder
  }

  export type LeconListRelationFilter = {
    every?: leconWhereInput
    some?: leconWhereInput
    none?: leconWhereInput
  }

  export type leconOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type chapitreCountOrderByAggregateInput = {
    id_chapitre?: SortOrder
    titre?: SortOrder
    numeroOrdre?: SortOrder
    id_cours?: SortOrder
  }

  export type chapitreAvgOrderByAggregateInput = {
    id_chapitre?: SortOrder
    numeroOrdre?: SortOrder
    id_cours?: SortOrder
  }

  export type chapitreMaxOrderByAggregateInput = {
    id_chapitre?: SortOrder
    titre?: SortOrder
    numeroOrdre?: SortOrder
    id_cours?: SortOrder
  }

  export type chapitreMinOrderByAggregateInput = {
    id_chapitre?: SortOrder
    titre?: SortOrder
    numeroOrdre?: SortOrder
    id_cours?: SortOrder
  }

  export type chapitreSumOrderByAggregateInput = {
    id_chapitre?: SortOrder
    numeroOrdre?: SortOrder
    id_cours?: SortOrder
  }

  export type ChapitreScalarRelationFilter = {
    is?: chapitreWhereInput
    isNot?: chapitreWhereInput
  }

  export type leconCountOrderByAggregateInput = {
    id_lecon?: SortOrder
    titre?: SortOrder
    contenuTextuel?: SortOrder
    contenuVideo?: SortOrder
    numeroOrdre?: SortOrder
    id_chapitre?: SortOrder
  }

  export type leconAvgOrderByAggregateInput = {
    id_lecon?: SortOrder
    numeroOrdre?: SortOrder
    id_chapitre?: SortOrder
  }

  export type leconMaxOrderByAggregateInput = {
    id_lecon?: SortOrder
    titre?: SortOrder
    contenuTextuel?: SortOrder
    contenuVideo?: SortOrder
    numeroOrdre?: SortOrder
    id_chapitre?: SortOrder
  }

  export type leconMinOrderByAggregateInput = {
    id_lecon?: SortOrder
    titre?: SortOrder
    contenuTextuel?: SortOrder
    contenuVideo?: SortOrder
    numeroOrdre?: SortOrder
    id_chapitre?: SortOrder
  }

  export type leconSumOrderByAggregateInput = {
    id_lecon?: SortOrder
    numeroOrdre?: SortOrder
    id_chapitre?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ApprenantNullableScalarRelationFilter = {
    is?: apprenantWhereInput | null
    isNot?: apprenantWhereInput | null
  }

  export type veilleCountOrderByAggregateInput = {
    id_veille?: SortOrder
    titre?: SortOrder
    lien_docDonnee?: SortOrder
    lien_docRendu?: SortOrder
    date_creation?: SortOrder
    date_fin?: SortOrder
    referentiel?: SortOrder
    id_apprenant?: SortOrder
    id_formateur?: SortOrder
  }

  export type veilleAvgOrderByAggregateInput = {
    id_veille?: SortOrder
    id_apprenant?: SortOrder
    id_formateur?: SortOrder
  }

  export type veilleMaxOrderByAggregateInput = {
    id_veille?: SortOrder
    titre?: SortOrder
    lien_docDonnee?: SortOrder
    lien_docRendu?: SortOrder
    date_creation?: SortOrder
    date_fin?: SortOrder
    referentiel?: SortOrder
    id_apprenant?: SortOrder
    id_formateur?: SortOrder
  }

  export type veilleMinOrderByAggregateInput = {
    id_veille?: SortOrder
    titre?: SortOrder
    lien_docDonnee?: SortOrder
    lien_docRendu?: SortOrder
    date_creation?: SortOrder
    date_fin?: SortOrder
    referentiel?: SortOrder
    id_apprenant?: SortOrder
    id_formateur?: SortOrder
  }

  export type veilleSumOrderByAggregateInput = {
    id_veille?: SortOrder
    id_apprenant?: SortOrder
    id_formateur?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type VeilleScalarRelationFilter = {
    is?: veilleWhereInput
    isNot?: veilleWhereInput
  }

  export type SoumissionCountOrderByAggregateInput = {
    id_soumission?: SortOrder
    id_veille?: SortOrder
    id_apprenant?: SortOrder
    lien_soumission?: SortOrder
    date_soumission?: SortOrder
  }

  export type SoumissionAvgOrderByAggregateInput = {
    id_soumission?: SortOrder
    id_veille?: SortOrder
    id_apprenant?: SortOrder
  }

  export type SoumissionMaxOrderByAggregateInput = {
    id_soumission?: SortOrder
    id_veille?: SortOrder
    id_apprenant?: SortOrder
    lien_soumission?: SortOrder
    date_soumission?: SortOrder
  }

  export type SoumissionMinOrderByAggregateInput = {
    id_soumission?: SortOrder
    id_veille?: SortOrder
    id_apprenant?: SortOrder
    lien_soumission?: SortOrder
    date_soumission?: SortOrder
  }

  export type SoumissionSumOrderByAggregateInput = {
    id_soumission?: SortOrder
    id_veille?: SortOrder
    id_apprenant?: SortOrder
  }

  export type coursCreateNestedManyWithoutFormateurInput = {
    create?: XOR<coursCreateWithoutFormateurInput, coursUncheckedCreateWithoutFormateurInput> | coursCreateWithoutFormateurInput[] | coursUncheckedCreateWithoutFormateurInput[]
    connectOrCreate?: coursCreateOrConnectWithoutFormateurInput | coursCreateOrConnectWithoutFormateurInput[]
    createMany?: coursCreateManyFormateurInputEnvelope
    connect?: coursWhereUniqueInput | coursWhereUniqueInput[]
  }

  export type veilleCreateNestedManyWithoutFormateurInput = {
    create?: XOR<veilleCreateWithoutFormateurInput, veilleUncheckedCreateWithoutFormateurInput> | veilleCreateWithoutFormateurInput[] | veilleUncheckedCreateWithoutFormateurInput[]
    connectOrCreate?: veilleCreateOrConnectWithoutFormateurInput | veilleCreateOrConnectWithoutFormateurInput[]
    createMany?: veilleCreateManyFormateurInputEnvelope
    connect?: veilleWhereUniqueInput | veilleWhereUniqueInput[]
  }

  export type coursUncheckedCreateNestedManyWithoutFormateurInput = {
    create?: XOR<coursCreateWithoutFormateurInput, coursUncheckedCreateWithoutFormateurInput> | coursCreateWithoutFormateurInput[] | coursUncheckedCreateWithoutFormateurInput[]
    connectOrCreate?: coursCreateOrConnectWithoutFormateurInput | coursCreateOrConnectWithoutFormateurInput[]
    createMany?: coursCreateManyFormateurInputEnvelope
    connect?: coursWhereUniqueInput | coursWhereUniqueInput[]
  }

  export type veilleUncheckedCreateNestedManyWithoutFormateurInput = {
    create?: XOR<veilleCreateWithoutFormateurInput, veilleUncheckedCreateWithoutFormateurInput> | veilleCreateWithoutFormateurInput[] | veilleUncheckedCreateWithoutFormateurInput[]
    connectOrCreate?: veilleCreateOrConnectWithoutFormateurInput | veilleCreateOrConnectWithoutFormateurInput[]
    createMany?: veilleCreateManyFormateurInputEnvelope
    connect?: veilleWhereUniqueInput | veilleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumReferentielFieldUpdateOperationsInput = {
    set?: $Enums.Referentiel
  }

  export type coursUpdateManyWithoutFormateurNestedInput = {
    create?: XOR<coursCreateWithoutFormateurInput, coursUncheckedCreateWithoutFormateurInput> | coursCreateWithoutFormateurInput[] | coursUncheckedCreateWithoutFormateurInput[]
    connectOrCreate?: coursCreateOrConnectWithoutFormateurInput | coursCreateOrConnectWithoutFormateurInput[]
    upsert?: coursUpsertWithWhereUniqueWithoutFormateurInput | coursUpsertWithWhereUniqueWithoutFormateurInput[]
    createMany?: coursCreateManyFormateurInputEnvelope
    set?: coursWhereUniqueInput | coursWhereUniqueInput[]
    disconnect?: coursWhereUniqueInput | coursWhereUniqueInput[]
    delete?: coursWhereUniqueInput | coursWhereUniqueInput[]
    connect?: coursWhereUniqueInput | coursWhereUniqueInput[]
    update?: coursUpdateWithWhereUniqueWithoutFormateurInput | coursUpdateWithWhereUniqueWithoutFormateurInput[]
    updateMany?: coursUpdateManyWithWhereWithoutFormateurInput | coursUpdateManyWithWhereWithoutFormateurInput[]
    deleteMany?: coursScalarWhereInput | coursScalarWhereInput[]
  }

  export type veilleUpdateManyWithoutFormateurNestedInput = {
    create?: XOR<veilleCreateWithoutFormateurInput, veilleUncheckedCreateWithoutFormateurInput> | veilleCreateWithoutFormateurInput[] | veilleUncheckedCreateWithoutFormateurInput[]
    connectOrCreate?: veilleCreateOrConnectWithoutFormateurInput | veilleCreateOrConnectWithoutFormateurInput[]
    upsert?: veilleUpsertWithWhereUniqueWithoutFormateurInput | veilleUpsertWithWhereUniqueWithoutFormateurInput[]
    createMany?: veilleCreateManyFormateurInputEnvelope
    set?: veilleWhereUniqueInput | veilleWhereUniqueInput[]
    disconnect?: veilleWhereUniqueInput | veilleWhereUniqueInput[]
    delete?: veilleWhereUniqueInput | veilleWhereUniqueInput[]
    connect?: veilleWhereUniqueInput | veilleWhereUniqueInput[]
    update?: veilleUpdateWithWhereUniqueWithoutFormateurInput | veilleUpdateWithWhereUniqueWithoutFormateurInput[]
    updateMany?: veilleUpdateManyWithWhereWithoutFormateurInput | veilleUpdateManyWithWhereWithoutFormateurInput[]
    deleteMany?: veilleScalarWhereInput | veilleScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type coursUncheckedUpdateManyWithoutFormateurNestedInput = {
    create?: XOR<coursCreateWithoutFormateurInput, coursUncheckedCreateWithoutFormateurInput> | coursCreateWithoutFormateurInput[] | coursUncheckedCreateWithoutFormateurInput[]
    connectOrCreate?: coursCreateOrConnectWithoutFormateurInput | coursCreateOrConnectWithoutFormateurInput[]
    upsert?: coursUpsertWithWhereUniqueWithoutFormateurInput | coursUpsertWithWhereUniqueWithoutFormateurInput[]
    createMany?: coursCreateManyFormateurInputEnvelope
    set?: coursWhereUniqueInput | coursWhereUniqueInput[]
    disconnect?: coursWhereUniqueInput | coursWhereUniqueInput[]
    delete?: coursWhereUniqueInput | coursWhereUniqueInput[]
    connect?: coursWhereUniqueInput | coursWhereUniqueInput[]
    update?: coursUpdateWithWhereUniqueWithoutFormateurInput | coursUpdateWithWhereUniqueWithoutFormateurInput[]
    updateMany?: coursUpdateManyWithWhereWithoutFormateurInput | coursUpdateManyWithWhereWithoutFormateurInput[]
    deleteMany?: coursScalarWhereInput | coursScalarWhereInput[]
  }

  export type veilleUncheckedUpdateManyWithoutFormateurNestedInput = {
    create?: XOR<veilleCreateWithoutFormateurInput, veilleUncheckedCreateWithoutFormateurInput> | veilleCreateWithoutFormateurInput[] | veilleUncheckedCreateWithoutFormateurInput[]
    connectOrCreate?: veilleCreateOrConnectWithoutFormateurInput | veilleCreateOrConnectWithoutFormateurInput[]
    upsert?: veilleUpsertWithWhereUniqueWithoutFormateurInput | veilleUpsertWithWhereUniqueWithoutFormateurInput[]
    createMany?: veilleCreateManyFormateurInputEnvelope
    set?: veilleWhereUniqueInput | veilleWhereUniqueInput[]
    disconnect?: veilleWhereUniqueInput | veilleWhereUniqueInput[]
    delete?: veilleWhereUniqueInput | veilleWhereUniqueInput[]
    connect?: veilleWhereUniqueInput | veilleWhereUniqueInput[]
    update?: veilleUpdateWithWhereUniqueWithoutFormateurInput | veilleUpdateWithWhereUniqueWithoutFormateurInput[]
    updateMany?: veilleUpdateManyWithWhereWithoutFormateurInput | veilleUpdateManyWithWhereWithoutFormateurInput[]
    deleteMany?: veilleScalarWhereInput | veilleScalarWhereInput[]
  }

  export type veilleCreateNestedManyWithoutApprenantInput = {
    create?: XOR<veilleCreateWithoutApprenantInput, veilleUncheckedCreateWithoutApprenantInput> | veilleCreateWithoutApprenantInput[] | veilleUncheckedCreateWithoutApprenantInput[]
    connectOrCreate?: veilleCreateOrConnectWithoutApprenantInput | veilleCreateOrConnectWithoutApprenantInput[]
    createMany?: veilleCreateManyApprenantInputEnvelope
    connect?: veilleWhereUniqueInput | veilleWhereUniqueInput[]
  }

  export type suiviCoursCreateNestedManyWithoutApprenantInput = {
    create?: XOR<suiviCoursCreateWithoutApprenantInput, suiviCoursUncheckedCreateWithoutApprenantInput> | suiviCoursCreateWithoutApprenantInput[] | suiviCoursUncheckedCreateWithoutApprenantInput[]
    connectOrCreate?: suiviCoursCreateOrConnectWithoutApprenantInput | suiviCoursCreateOrConnectWithoutApprenantInput[]
    createMany?: suiviCoursCreateManyApprenantInputEnvelope
    connect?: suiviCoursWhereUniqueInput | suiviCoursWhereUniqueInput[]
  }

  export type SoumissionCreateNestedManyWithoutApprenantInput = {
    create?: XOR<SoumissionCreateWithoutApprenantInput, SoumissionUncheckedCreateWithoutApprenantInput> | SoumissionCreateWithoutApprenantInput[] | SoumissionUncheckedCreateWithoutApprenantInput[]
    connectOrCreate?: SoumissionCreateOrConnectWithoutApprenantInput | SoumissionCreateOrConnectWithoutApprenantInput[]
    createMany?: SoumissionCreateManyApprenantInputEnvelope
    connect?: SoumissionWhereUniqueInput | SoumissionWhereUniqueInput[]
  }

  export type veilleUncheckedCreateNestedManyWithoutApprenantInput = {
    create?: XOR<veilleCreateWithoutApprenantInput, veilleUncheckedCreateWithoutApprenantInput> | veilleCreateWithoutApprenantInput[] | veilleUncheckedCreateWithoutApprenantInput[]
    connectOrCreate?: veilleCreateOrConnectWithoutApprenantInput | veilleCreateOrConnectWithoutApprenantInput[]
    createMany?: veilleCreateManyApprenantInputEnvelope
    connect?: veilleWhereUniqueInput | veilleWhereUniqueInput[]
  }

  export type suiviCoursUncheckedCreateNestedManyWithoutApprenantInput = {
    create?: XOR<suiviCoursCreateWithoutApprenantInput, suiviCoursUncheckedCreateWithoutApprenantInput> | suiviCoursCreateWithoutApprenantInput[] | suiviCoursUncheckedCreateWithoutApprenantInput[]
    connectOrCreate?: suiviCoursCreateOrConnectWithoutApprenantInput | suiviCoursCreateOrConnectWithoutApprenantInput[]
    createMany?: suiviCoursCreateManyApprenantInputEnvelope
    connect?: suiviCoursWhereUniqueInput | suiviCoursWhereUniqueInput[]
  }

  export type SoumissionUncheckedCreateNestedManyWithoutApprenantInput = {
    create?: XOR<SoumissionCreateWithoutApprenantInput, SoumissionUncheckedCreateWithoutApprenantInput> | SoumissionCreateWithoutApprenantInput[] | SoumissionUncheckedCreateWithoutApprenantInput[]
    connectOrCreate?: SoumissionCreateOrConnectWithoutApprenantInput | SoumissionCreateOrConnectWithoutApprenantInput[]
    createMany?: SoumissionCreateManyApprenantInputEnvelope
    connect?: SoumissionWhereUniqueInput | SoumissionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type veilleUpdateManyWithoutApprenantNestedInput = {
    create?: XOR<veilleCreateWithoutApprenantInput, veilleUncheckedCreateWithoutApprenantInput> | veilleCreateWithoutApprenantInput[] | veilleUncheckedCreateWithoutApprenantInput[]
    connectOrCreate?: veilleCreateOrConnectWithoutApprenantInput | veilleCreateOrConnectWithoutApprenantInput[]
    upsert?: veilleUpsertWithWhereUniqueWithoutApprenantInput | veilleUpsertWithWhereUniqueWithoutApprenantInput[]
    createMany?: veilleCreateManyApprenantInputEnvelope
    set?: veilleWhereUniqueInput | veilleWhereUniqueInput[]
    disconnect?: veilleWhereUniqueInput | veilleWhereUniqueInput[]
    delete?: veilleWhereUniqueInput | veilleWhereUniqueInput[]
    connect?: veilleWhereUniqueInput | veilleWhereUniqueInput[]
    update?: veilleUpdateWithWhereUniqueWithoutApprenantInput | veilleUpdateWithWhereUniqueWithoutApprenantInput[]
    updateMany?: veilleUpdateManyWithWhereWithoutApprenantInput | veilleUpdateManyWithWhereWithoutApprenantInput[]
    deleteMany?: veilleScalarWhereInput | veilleScalarWhereInput[]
  }

  export type suiviCoursUpdateManyWithoutApprenantNestedInput = {
    create?: XOR<suiviCoursCreateWithoutApprenantInput, suiviCoursUncheckedCreateWithoutApprenantInput> | suiviCoursCreateWithoutApprenantInput[] | suiviCoursUncheckedCreateWithoutApprenantInput[]
    connectOrCreate?: suiviCoursCreateOrConnectWithoutApprenantInput | suiviCoursCreateOrConnectWithoutApprenantInput[]
    upsert?: suiviCoursUpsertWithWhereUniqueWithoutApprenantInput | suiviCoursUpsertWithWhereUniqueWithoutApprenantInput[]
    createMany?: suiviCoursCreateManyApprenantInputEnvelope
    set?: suiviCoursWhereUniqueInput | suiviCoursWhereUniqueInput[]
    disconnect?: suiviCoursWhereUniqueInput | suiviCoursWhereUniqueInput[]
    delete?: suiviCoursWhereUniqueInput | suiviCoursWhereUniqueInput[]
    connect?: suiviCoursWhereUniqueInput | suiviCoursWhereUniqueInput[]
    update?: suiviCoursUpdateWithWhereUniqueWithoutApprenantInput | suiviCoursUpdateWithWhereUniqueWithoutApprenantInput[]
    updateMany?: suiviCoursUpdateManyWithWhereWithoutApprenantInput | suiviCoursUpdateManyWithWhereWithoutApprenantInput[]
    deleteMany?: suiviCoursScalarWhereInput | suiviCoursScalarWhereInput[]
  }

  export type SoumissionUpdateManyWithoutApprenantNestedInput = {
    create?: XOR<SoumissionCreateWithoutApprenantInput, SoumissionUncheckedCreateWithoutApprenantInput> | SoumissionCreateWithoutApprenantInput[] | SoumissionUncheckedCreateWithoutApprenantInput[]
    connectOrCreate?: SoumissionCreateOrConnectWithoutApprenantInput | SoumissionCreateOrConnectWithoutApprenantInput[]
    upsert?: SoumissionUpsertWithWhereUniqueWithoutApprenantInput | SoumissionUpsertWithWhereUniqueWithoutApprenantInput[]
    createMany?: SoumissionCreateManyApprenantInputEnvelope
    set?: SoumissionWhereUniqueInput | SoumissionWhereUniqueInput[]
    disconnect?: SoumissionWhereUniqueInput | SoumissionWhereUniqueInput[]
    delete?: SoumissionWhereUniqueInput | SoumissionWhereUniqueInput[]
    connect?: SoumissionWhereUniqueInput | SoumissionWhereUniqueInput[]
    update?: SoumissionUpdateWithWhereUniqueWithoutApprenantInput | SoumissionUpdateWithWhereUniqueWithoutApprenantInput[]
    updateMany?: SoumissionUpdateManyWithWhereWithoutApprenantInput | SoumissionUpdateManyWithWhereWithoutApprenantInput[]
    deleteMany?: SoumissionScalarWhereInput | SoumissionScalarWhereInput[]
  }

  export type veilleUncheckedUpdateManyWithoutApprenantNestedInput = {
    create?: XOR<veilleCreateWithoutApprenantInput, veilleUncheckedCreateWithoutApprenantInput> | veilleCreateWithoutApprenantInput[] | veilleUncheckedCreateWithoutApprenantInput[]
    connectOrCreate?: veilleCreateOrConnectWithoutApprenantInput | veilleCreateOrConnectWithoutApprenantInput[]
    upsert?: veilleUpsertWithWhereUniqueWithoutApprenantInput | veilleUpsertWithWhereUniqueWithoutApprenantInput[]
    createMany?: veilleCreateManyApprenantInputEnvelope
    set?: veilleWhereUniqueInput | veilleWhereUniqueInput[]
    disconnect?: veilleWhereUniqueInput | veilleWhereUniqueInput[]
    delete?: veilleWhereUniqueInput | veilleWhereUniqueInput[]
    connect?: veilleWhereUniqueInput | veilleWhereUniqueInput[]
    update?: veilleUpdateWithWhereUniqueWithoutApprenantInput | veilleUpdateWithWhereUniqueWithoutApprenantInput[]
    updateMany?: veilleUpdateManyWithWhereWithoutApprenantInput | veilleUpdateManyWithWhereWithoutApprenantInput[]
    deleteMany?: veilleScalarWhereInput | veilleScalarWhereInput[]
  }

  export type suiviCoursUncheckedUpdateManyWithoutApprenantNestedInput = {
    create?: XOR<suiviCoursCreateWithoutApprenantInput, suiviCoursUncheckedCreateWithoutApprenantInput> | suiviCoursCreateWithoutApprenantInput[] | suiviCoursUncheckedCreateWithoutApprenantInput[]
    connectOrCreate?: suiviCoursCreateOrConnectWithoutApprenantInput | suiviCoursCreateOrConnectWithoutApprenantInput[]
    upsert?: suiviCoursUpsertWithWhereUniqueWithoutApprenantInput | suiviCoursUpsertWithWhereUniqueWithoutApprenantInput[]
    createMany?: suiviCoursCreateManyApprenantInputEnvelope
    set?: suiviCoursWhereUniqueInput | suiviCoursWhereUniqueInput[]
    disconnect?: suiviCoursWhereUniqueInput | suiviCoursWhereUniqueInput[]
    delete?: suiviCoursWhereUniqueInput | suiviCoursWhereUniqueInput[]
    connect?: suiviCoursWhereUniqueInput | suiviCoursWhereUniqueInput[]
    update?: suiviCoursUpdateWithWhereUniqueWithoutApprenantInput | suiviCoursUpdateWithWhereUniqueWithoutApprenantInput[]
    updateMany?: suiviCoursUpdateManyWithWhereWithoutApprenantInput | suiviCoursUpdateManyWithWhereWithoutApprenantInput[]
    deleteMany?: suiviCoursScalarWhereInput | suiviCoursScalarWhereInput[]
  }

  export type SoumissionUncheckedUpdateManyWithoutApprenantNestedInput = {
    create?: XOR<SoumissionCreateWithoutApprenantInput, SoumissionUncheckedCreateWithoutApprenantInput> | SoumissionCreateWithoutApprenantInput[] | SoumissionUncheckedCreateWithoutApprenantInput[]
    connectOrCreate?: SoumissionCreateOrConnectWithoutApprenantInput | SoumissionCreateOrConnectWithoutApprenantInput[]
    upsert?: SoumissionUpsertWithWhereUniqueWithoutApprenantInput | SoumissionUpsertWithWhereUniqueWithoutApprenantInput[]
    createMany?: SoumissionCreateManyApprenantInputEnvelope
    set?: SoumissionWhereUniqueInput | SoumissionWhereUniqueInput[]
    disconnect?: SoumissionWhereUniqueInput | SoumissionWhereUniqueInput[]
    delete?: SoumissionWhereUniqueInput | SoumissionWhereUniqueInput[]
    connect?: SoumissionWhereUniqueInput | SoumissionWhereUniqueInput[]
    update?: SoumissionUpdateWithWhereUniqueWithoutApprenantInput | SoumissionUpdateWithWhereUniqueWithoutApprenantInput[]
    updateMany?: SoumissionUpdateManyWithWhereWithoutApprenantInput | SoumissionUpdateManyWithWhereWithoutApprenantInput[]
    deleteMany?: SoumissionScalarWhereInput | SoumissionScalarWhereInput[]
  }

  export type apprenantCreateNestedOneWithoutSuiviCoursInput = {
    create?: XOR<apprenantCreateWithoutSuiviCoursInput, apprenantUncheckedCreateWithoutSuiviCoursInput>
    connectOrCreate?: apprenantCreateOrConnectWithoutSuiviCoursInput
    connect?: apprenantWhereUniqueInput
  }

  export type coursCreateNestedOneWithoutSuiviCoursInput = {
    create?: XOR<coursCreateWithoutSuiviCoursInput, coursUncheckedCreateWithoutSuiviCoursInput>
    connectOrCreate?: coursCreateOrConnectWithoutSuiviCoursInput
    connect?: coursWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type apprenantUpdateOneRequiredWithoutSuiviCoursNestedInput = {
    create?: XOR<apprenantCreateWithoutSuiviCoursInput, apprenantUncheckedCreateWithoutSuiviCoursInput>
    connectOrCreate?: apprenantCreateOrConnectWithoutSuiviCoursInput
    upsert?: apprenantUpsertWithoutSuiviCoursInput
    connect?: apprenantWhereUniqueInput
    update?: XOR<XOR<apprenantUpdateToOneWithWhereWithoutSuiviCoursInput, apprenantUpdateWithoutSuiviCoursInput>, apprenantUncheckedUpdateWithoutSuiviCoursInput>
  }

  export type coursUpdateOneRequiredWithoutSuiviCoursNestedInput = {
    create?: XOR<coursCreateWithoutSuiviCoursInput, coursUncheckedCreateWithoutSuiviCoursInput>
    connectOrCreate?: coursCreateOrConnectWithoutSuiviCoursInput
    upsert?: coursUpsertWithoutSuiviCoursInput
    connect?: coursWhereUniqueInput
    update?: XOR<XOR<coursUpdateToOneWithWhereWithoutSuiviCoursInput, coursUpdateWithoutSuiviCoursInput>, coursUncheckedUpdateWithoutSuiviCoursInput>
  }

  export type formateurCreateNestedOneWithoutCoursInput = {
    create?: XOR<formateurCreateWithoutCoursInput, formateurUncheckedCreateWithoutCoursInput>
    connectOrCreate?: formateurCreateOrConnectWithoutCoursInput
    connect?: formateurWhereUniqueInput
  }

  export type suiviCoursCreateNestedManyWithoutCoursInput = {
    create?: XOR<suiviCoursCreateWithoutCoursInput, suiviCoursUncheckedCreateWithoutCoursInput> | suiviCoursCreateWithoutCoursInput[] | suiviCoursUncheckedCreateWithoutCoursInput[]
    connectOrCreate?: suiviCoursCreateOrConnectWithoutCoursInput | suiviCoursCreateOrConnectWithoutCoursInput[]
    createMany?: suiviCoursCreateManyCoursInputEnvelope
    connect?: suiviCoursWhereUniqueInput | suiviCoursWhereUniqueInput[]
  }

  export type chapitreCreateNestedManyWithoutCoursInput = {
    create?: XOR<chapitreCreateWithoutCoursInput, chapitreUncheckedCreateWithoutCoursInput> | chapitreCreateWithoutCoursInput[] | chapitreUncheckedCreateWithoutCoursInput[]
    connectOrCreate?: chapitreCreateOrConnectWithoutCoursInput | chapitreCreateOrConnectWithoutCoursInput[]
    createMany?: chapitreCreateManyCoursInputEnvelope
    connect?: chapitreWhereUniqueInput | chapitreWhereUniqueInput[]
  }

  export type suiviCoursUncheckedCreateNestedManyWithoutCoursInput = {
    create?: XOR<suiviCoursCreateWithoutCoursInput, suiviCoursUncheckedCreateWithoutCoursInput> | suiviCoursCreateWithoutCoursInput[] | suiviCoursUncheckedCreateWithoutCoursInput[]
    connectOrCreate?: suiviCoursCreateOrConnectWithoutCoursInput | suiviCoursCreateOrConnectWithoutCoursInput[]
    createMany?: suiviCoursCreateManyCoursInputEnvelope
    connect?: suiviCoursWhereUniqueInput | suiviCoursWhereUniqueInput[]
  }

  export type chapitreUncheckedCreateNestedManyWithoutCoursInput = {
    create?: XOR<chapitreCreateWithoutCoursInput, chapitreUncheckedCreateWithoutCoursInput> | chapitreCreateWithoutCoursInput[] | chapitreUncheckedCreateWithoutCoursInput[]
    connectOrCreate?: chapitreCreateOrConnectWithoutCoursInput | chapitreCreateOrConnectWithoutCoursInput[]
    createMany?: chapitreCreateManyCoursInputEnvelope
    connect?: chapitreWhereUniqueInput | chapitreWhereUniqueInput[]
  }

  export type formateurUpdateOneRequiredWithoutCoursNestedInput = {
    create?: XOR<formateurCreateWithoutCoursInput, formateurUncheckedCreateWithoutCoursInput>
    connectOrCreate?: formateurCreateOrConnectWithoutCoursInput
    upsert?: formateurUpsertWithoutCoursInput
    connect?: formateurWhereUniqueInput
    update?: XOR<XOR<formateurUpdateToOneWithWhereWithoutCoursInput, formateurUpdateWithoutCoursInput>, formateurUncheckedUpdateWithoutCoursInput>
  }

  export type suiviCoursUpdateManyWithoutCoursNestedInput = {
    create?: XOR<suiviCoursCreateWithoutCoursInput, suiviCoursUncheckedCreateWithoutCoursInput> | suiviCoursCreateWithoutCoursInput[] | suiviCoursUncheckedCreateWithoutCoursInput[]
    connectOrCreate?: suiviCoursCreateOrConnectWithoutCoursInput | suiviCoursCreateOrConnectWithoutCoursInput[]
    upsert?: suiviCoursUpsertWithWhereUniqueWithoutCoursInput | suiviCoursUpsertWithWhereUniqueWithoutCoursInput[]
    createMany?: suiviCoursCreateManyCoursInputEnvelope
    set?: suiviCoursWhereUniqueInput | suiviCoursWhereUniqueInput[]
    disconnect?: suiviCoursWhereUniqueInput | suiviCoursWhereUniqueInput[]
    delete?: suiviCoursWhereUniqueInput | suiviCoursWhereUniqueInput[]
    connect?: suiviCoursWhereUniqueInput | suiviCoursWhereUniqueInput[]
    update?: suiviCoursUpdateWithWhereUniqueWithoutCoursInput | suiviCoursUpdateWithWhereUniqueWithoutCoursInput[]
    updateMany?: suiviCoursUpdateManyWithWhereWithoutCoursInput | suiviCoursUpdateManyWithWhereWithoutCoursInput[]
    deleteMany?: suiviCoursScalarWhereInput | suiviCoursScalarWhereInput[]
  }

  export type chapitreUpdateManyWithoutCoursNestedInput = {
    create?: XOR<chapitreCreateWithoutCoursInput, chapitreUncheckedCreateWithoutCoursInput> | chapitreCreateWithoutCoursInput[] | chapitreUncheckedCreateWithoutCoursInput[]
    connectOrCreate?: chapitreCreateOrConnectWithoutCoursInput | chapitreCreateOrConnectWithoutCoursInput[]
    upsert?: chapitreUpsertWithWhereUniqueWithoutCoursInput | chapitreUpsertWithWhereUniqueWithoutCoursInput[]
    createMany?: chapitreCreateManyCoursInputEnvelope
    set?: chapitreWhereUniqueInput | chapitreWhereUniqueInput[]
    disconnect?: chapitreWhereUniqueInput | chapitreWhereUniqueInput[]
    delete?: chapitreWhereUniqueInput | chapitreWhereUniqueInput[]
    connect?: chapitreWhereUniqueInput | chapitreWhereUniqueInput[]
    update?: chapitreUpdateWithWhereUniqueWithoutCoursInput | chapitreUpdateWithWhereUniqueWithoutCoursInput[]
    updateMany?: chapitreUpdateManyWithWhereWithoutCoursInput | chapitreUpdateManyWithWhereWithoutCoursInput[]
    deleteMany?: chapitreScalarWhereInput | chapitreScalarWhereInput[]
  }

  export type suiviCoursUncheckedUpdateManyWithoutCoursNestedInput = {
    create?: XOR<suiviCoursCreateWithoutCoursInput, suiviCoursUncheckedCreateWithoutCoursInput> | suiviCoursCreateWithoutCoursInput[] | suiviCoursUncheckedCreateWithoutCoursInput[]
    connectOrCreate?: suiviCoursCreateOrConnectWithoutCoursInput | suiviCoursCreateOrConnectWithoutCoursInput[]
    upsert?: suiviCoursUpsertWithWhereUniqueWithoutCoursInput | suiviCoursUpsertWithWhereUniqueWithoutCoursInput[]
    createMany?: suiviCoursCreateManyCoursInputEnvelope
    set?: suiviCoursWhereUniqueInput | suiviCoursWhereUniqueInput[]
    disconnect?: suiviCoursWhereUniqueInput | suiviCoursWhereUniqueInput[]
    delete?: suiviCoursWhereUniqueInput | suiviCoursWhereUniqueInput[]
    connect?: suiviCoursWhereUniqueInput | suiviCoursWhereUniqueInput[]
    update?: suiviCoursUpdateWithWhereUniqueWithoutCoursInput | suiviCoursUpdateWithWhereUniqueWithoutCoursInput[]
    updateMany?: suiviCoursUpdateManyWithWhereWithoutCoursInput | suiviCoursUpdateManyWithWhereWithoutCoursInput[]
    deleteMany?: suiviCoursScalarWhereInput | suiviCoursScalarWhereInput[]
  }

  export type chapitreUncheckedUpdateManyWithoutCoursNestedInput = {
    create?: XOR<chapitreCreateWithoutCoursInput, chapitreUncheckedCreateWithoutCoursInput> | chapitreCreateWithoutCoursInput[] | chapitreUncheckedCreateWithoutCoursInput[]
    connectOrCreate?: chapitreCreateOrConnectWithoutCoursInput | chapitreCreateOrConnectWithoutCoursInput[]
    upsert?: chapitreUpsertWithWhereUniqueWithoutCoursInput | chapitreUpsertWithWhereUniqueWithoutCoursInput[]
    createMany?: chapitreCreateManyCoursInputEnvelope
    set?: chapitreWhereUniqueInput | chapitreWhereUniqueInput[]
    disconnect?: chapitreWhereUniqueInput | chapitreWhereUniqueInput[]
    delete?: chapitreWhereUniqueInput | chapitreWhereUniqueInput[]
    connect?: chapitreWhereUniqueInput | chapitreWhereUniqueInput[]
    update?: chapitreUpdateWithWhereUniqueWithoutCoursInput | chapitreUpdateWithWhereUniqueWithoutCoursInput[]
    updateMany?: chapitreUpdateManyWithWhereWithoutCoursInput | chapitreUpdateManyWithWhereWithoutCoursInput[]
    deleteMany?: chapitreScalarWhereInput | chapitreScalarWhereInput[]
  }

  export type coursCreateNestedOneWithoutChapitreInput = {
    create?: XOR<coursCreateWithoutChapitreInput, coursUncheckedCreateWithoutChapitreInput>
    connectOrCreate?: coursCreateOrConnectWithoutChapitreInput
    connect?: coursWhereUniqueInput
  }

  export type leconCreateNestedManyWithoutChapitreInput = {
    create?: XOR<leconCreateWithoutChapitreInput, leconUncheckedCreateWithoutChapitreInput> | leconCreateWithoutChapitreInput[] | leconUncheckedCreateWithoutChapitreInput[]
    connectOrCreate?: leconCreateOrConnectWithoutChapitreInput | leconCreateOrConnectWithoutChapitreInput[]
    createMany?: leconCreateManyChapitreInputEnvelope
    connect?: leconWhereUniqueInput | leconWhereUniqueInput[]
  }

  export type leconUncheckedCreateNestedManyWithoutChapitreInput = {
    create?: XOR<leconCreateWithoutChapitreInput, leconUncheckedCreateWithoutChapitreInput> | leconCreateWithoutChapitreInput[] | leconUncheckedCreateWithoutChapitreInput[]
    connectOrCreate?: leconCreateOrConnectWithoutChapitreInput | leconCreateOrConnectWithoutChapitreInput[]
    createMany?: leconCreateManyChapitreInputEnvelope
    connect?: leconWhereUniqueInput | leconWhereUniqueInput[]
  }

  export type coursUpdateOneRequiredWithoutChapitreNestedInput = {
    create?: XOR<coursCreateWithoutChapitreInput, coursUncheckedCreateWithoutChapitreInput>
    connectOrCreate?: coursCreateOrConnectWithoutChapitreInput
    upsert?: coursUpsertWithoutChapitreInput
    connect?: coursWhereUniqueInput
    update?: XOR<XOR<coursUpdateToOneWithWhereWithoutChapitreInput, coursUpdateWithoutChapitreInput>, coursUncheckedUpdateWithoutChapitreInput>
  }

  export type leconUpdateManyWithoutChapitreNestedInput = {
    create?: XOR<leconCreateWithoutChapitreInput, leconUncheckedCreateWithoutChapitreInput> | leconCreateWithoutChapitreInput[] | leconUncheckedCreateWithoutChapitreInput[]
    connectOrCreate?: leconCreateOrConnectWithoutChapitreInput | leconCreateOrConnectWithoutChapitreInput[]
    upsert?: leconUpsertWithWhereUniqueWithoutChapitreInput | leconUpsertWithWhereUniqueWithoutChapitreInput[]
    createMany?: leconCreateManyChapitreInputEnvelope
    set?: leconWhereUniqueInput | leconWhereUniqueInput[]
    disconnect?: leconWhereUniqueInput | leconWhereUniqueInput[]
    delete?: leconWhereUniqueInput | leconWhereUniqueInput[]
    connect?: leconWhereUniqueInput | leconWhereUniqueInput[]
    update?: leconUpdateWithWhereUniqueWithoutChapitreInput | leconUpdateWithWhereUniqueWithoutChapitreInput[]
    updateMany?: leconUpdateManyWithWhereWithoutChapitreInput | leconUpdateManyWithWhereWithoutChapitreInput[]
    deleteMany?: leconScalarWhereInput | leconScalarWhereInput[]
  }

  export type leconUncheckedUpdateManyWithoutChapitreNestedInput = {
    create?: XOR<leconCreateWithoutChapitreInput, leconUncheckedCreateWithoutChapitreInput> | leconCreateWithoutChapitreInput[] | leconUncheckedCreateWithoutChapitreInput[]
    connectOrCreate?: leconCreateOrConnectWithoutChapitreInput | leconCreateOrConnectWithoutChapitreInput[]
    upsert?: leconUpsertWithWhereUniqueWithoutChapitreInput | leconUpsertWithWhereUniqueWithoutChapitreInput[]
    createMany?: leconCreateManyChapitreInputEnvelope
    set?: leconWhereUniqueInput | leconWhereUniqueInput[]
    disconnect?: leconWhereUniqueInput | leconWhereUniqueInput[]
    delete?: leconWhereUniqueInput | leconWhereUniqueInput[]
    connect?: leconWhereUniqueInput | leconWhereUniqueInput[]
    update?: leconUpdateWithWhereUniqueWithoutChapitreInput | leconUpdateWithWhereUniqueWithoutChapitreInput[]
    updateMany?: leconUpdateManyWithWhereWithoutChapitreInput | leconUpdateManyWithWhereWithoutChapitreInput[]
    deleteMany?: leconScalarWhereInput | leconScalarWhereInput[]
  }

  export type chapitreCreateNestedOneWithoutLeconInput = {
    create?: XOR<chapitreCreateWithoutLeconInput, chapitreUncheckedCreateWithoutLeconInput>
    connectOrCreate?: chapitreCreateOrConnectWithoutLeconInput
    connect?: chapitreWhereUniqueInput
  }

  export type chapitreUpdateOneRequiredWithoutLeconNestedInput = {
    create?: XOR<chapitreCreateWithoutLeconInput, chapitreUncheckedCreateWithoutLeconInput>
    connectOrCreate?: chapitreCreateOrConnectWithoutLeconInput
    upsert?: chapitreUpsertWithoutLeconInput
    connect?: chapitreWhereUniqueInput
    update?: XOR<XOR<chapitreUpdateToOneWithWhereWithoutLeconInput, chapitreUpdateWithoutLeconInput>, chapitreUncheckedUpdateWithoutLeconInput>
  }

  export type formateurCreateNestedOneWithoutVeilleInput = {
    create?: XOR<formateurCreateWithoutVeilleInput, formateurUncheckedCreateWithoutVeilleInput>
    connectOrCreate?: formateurCreateOrConnectWithoutVeilleInput
    connect?: formateurWhereUniqueInput
  }

  export type apprenantCreateNestedOneWithoutVeilleInput = {
    create?: XOR<apprenantCreateWithoutVeilleInput, apprenantUncheckedCreateWithoutVeilleInput>
    connectOrCreate?: apprenantCreateOrConnectWithoutVeilleInput
    connect?: apprenantWhereUniqueInput
  }

  export type SoumissionCreateNestedManyWithoutVeilleInput = {
    create?: XOR<SoumissionCreateWithoutVeilleInput, SoumissionUncheckedCreateWithoutVeilleInput> | SoumissionCreateWithoutVeilleInput[] | SoumissionUncheckedCreateWithoutVeilleInput[]
    connectOrCreate?: SoumissionCreateOrConnectWithoutVeilleInput | SoumissionCreateOrConnectWithoutVeilleInput[]
    createMany?: SoumissionCreateManyVeilleInputEnvelope
    connect?: SoumissionWhereUniqueInput | SoumissionWhereUniqueInput[]
  }

  export type SoumissionUncheckedCreateNestedManyWithoutVeilleInput = {
    create?: XOR<SoumissionCreateWithoutVeilleInput, SoumissionUncheckedCreateWithoutVeilleInput> | SoumissionCreateWithoutVeilleInput[] | SoumissionUncheckedCreateWithoutVeilleInput[]
    connectOrCreate?: SoumissionCreateOrConnectWithoutVeilleInput | SoumissionCreateOrConnectWithoutVeilleInput[]
    createMany?: SoumissionCreateManyVeilleInputEnvelope
    connect?: SoumissionWhereUniqueInput | SoumissionWhereUniqueInput[]
  }

  export type formateurUpdateOneRequiredWithoutVeilleNestedInput = {
    create?: XOR<formateurCreateWithoutVeilleInput, formateurUncheckedCreateWithoutVeilleInput>
    connectOrCreate?: formateurCreateOrConnectWithoutVeilleInput
    upsert?: formateurUpsertWithoutVeilleInput
    connect?: formateurWhereUniqueInput
    update?: XOR<XOR<formateurUpdateToOneWithWhereWithoutVeilleInput, formateurUpdateWithoutVeilleInput>, formateurUncheckedUpdateWithoutVeilleInput>
  }

  export type apprenantUpdateOneWithoutVeilleNestedInput = {
    create?: XOR<apprenantCreateWithoutVeilleInput, apprenantUncheckedCreateWithoutVeilleInput>
    connectOrCreate?: apprenantCreateOrConnectWithoutVeilleInput
    upsert?: apprenantUpsertWithoutVeilleInput
    disconnect?: apprenantWhereInput | boolean
    delete?: apprenantWhereInput | boolean
    connect?: apprenantWhereUniqueInput
    update?: XOR<XOR<apprenantUpdateToOneWithWhereWithoutVeilleInput, apprenantUpdateWithoutVeilleInput>, apprenantUncheckedUpdateWithoutVeilleInput>
  }

  export type SoumissionUpdateManyWithoutVeilleNestedInput = {
    create?: XOR<SoumissionCreateWithoutVeilleInput, SoumissionUncheckedCreateWithoutVeilleInput> | SoumissionCreateWithoutVeilleInput[] | SoumissionUncheckedCreateWithoutVeilleInput[]
    connectOrCreate?: SoumissionCreateOrConnectWithoutVeilleInput | SoumissionCreateOrConnectWithoutVeilleInput[]
    upsert?: SoumissionUpsertWithWhereUniqueWithoutVeilleInput | SoumissionUpsertWithWhereUniqueWithoutVeilleInput[]
    createMany?: SoumissionCreateManyVeilleInputEnvelope
    set?: SoumissionWhereUniqueInput | SoumissionWhereUniqueInput[]
    disconnect?: SoumissionWhereUniqueInput | SoumissionWhereUniqueInput[]
    delete?: SoumissionWhereUniqueInput | SoumissionWhereUniqueInput[]
    connect?: SoumissionWhereUniqueInput | SoumissionWhereUniqueInput[]
    update?: SoumissionUpdateWithWhereUniqueWithoutVeilleInput | SoumissionUpdateWithWhereUniqueWithoutVeilleInput[]
    updateMany?: SoumissionUpdateManyWithWhereWithoutVeilleInput | SoumissionUpdateManyWithWhereWithoutVeilleInput[]
    deleteMany?: SoumissionScalarWhereInput | SoumissionScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SoumissionUncheckedUpdateManyWithoutVeilleNestedInput = {
    create?: XOR<SoumissionCreateWithoutVeilleInput, SoumissionUncheckedCreateWithoutVeilleInput> | SoumissionCreateWithoutVeilleInput[] | SoumissionUncheckedCreateWithoutVeilleInput[]
    connectOrCreate?: SoumissionCreateOrConnectWithoutVeilleInput | SoumissionCreateOrConnectWithoutVeilleInput[]
    upsert?: SoumissionUpsertWithWhereUniqueWithoutVeilleInput | SoumissionUpsertWithWhereUniqueWithoutVeilleInput[]
    createMany?: SoumissionCreateManyVeilleInputEnvelope
    set?: SoumissionWhereUniqueInput | SoumissionWhereUniqueInput[]
    disconnect?: SoumissionWhereUniqueInput | SoumissionWhereUniqueInput[]
    delete?: SoumissionWhereUniqueInput | SoumissionWhereUniqueInput[]
    connect?: SoumissionWhereUniqueInput | SoumissionWhereUniqueInput[]
    update?: SoumissionUpdateWithWhereUniqueWithoutVeilleInput | SoumissionUpdateWithWhereUniqueWithoutVeilleInput[]
    updateMany?: SoumissionUpdateManyWithWhereWithoutVeilleInput | SoumissionUpdateManyWithWhereWithoutVeilleInput[]
    deleteMany?: SoumissionScalarWhereInput | SoumissionScalarWhereInput[]
  }

  export type veilleCreateNestedOneWithoutSoumissionInput = {
    create?: XOR<veilleCreateWithoutSoumissionInput, veilleUncheckedCreateWithoutSoumissionInput>
    connectOrCreate?: veilleCreateOrConnectWithoutSoumissionInput
    connect?: veilleWhereUniqueInput
  }

  export type apprenantCreateNestedOneWithoutSoumissionInput = {
    create?: XOR<apprenantCreateWithoutSoumissionInput, apprenantUncheckedCreateWithoutSoumissionInput>
    connectOrCreate?: apprenantCreateOrConnectWithoutSoumissionInput
    connect?: apprenantWhereUniqueInput
  }

  export type veilleUpdateOneRequiredWithoutSoumissionNestedInput = {
    create?: XOR<veilleCreateWithoutSoumissionInput, veilleUncheckedCreateWithoutSoumissionInput>
    connectOrCreate?: veilleCreateOrConnectWithoutSoumissionInput
    upsert?: veilleUpsertWithoutSoumissionInput
    connect?: veilleWhereUniqueInput
    update?: XOR<XOR<veilleUpdateToOneWithWhereWithoutSoumissionInput, veilleUpdateWithoutSoumissionInput>, veilleUncheckedUpdateWithoutSoumissionInput>
  }

  export type apprenantUpdateOneRequiredWithoutSoumissionNestedInput = {
    create?: XOR<apprenantCreateWithoutSoumissionInput, apprenantUncheckedCreateWithoutSoumissionInput>
    connectOrCreate?: apprenantCreateOrConnectWithoutSoumissionInput
    upsert?: apprenantUpsertWithoutSoumissionInput
    connect?: apprenantWhereUniqueInput
    update?: XOR<XOR<apprenantUpdateToOneWithWhereWithoutSoumissionInput, apprenantUpdateWithoutSoumissionInput>, apprenantUncheckedUpdateWithoutSoumissionInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumReferentielFilter<$PrismaModel = never> = {
    equals?: $Enums.Referentiel | EnumReferentielFieldRefInput<$PrismaModel>
    in?: $Enums.Referentiel[] | ListEnumReferentielFieldRefInput<$PrismaModel>
    notIn?: $Enums.Referentiel[] | ListEnumReferentielFieldRefInput<$PrismaModel>
    not?: NestedEnumReferentielFilter<$PrismaModel> | $Enums.Referentiel
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumReferentielWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Referentiel | EnumReferentielFieldRefInput<$PrismaModel>
    in?: $Enums.Referentiel[] | ListEnumReferentielFieldRefInput<$PrismaModel>
    notIn?: $Enums.Referentiel[] | ListEnumReferentielFieldRefInput<$PrismaModel>
    not?: NestedEnumReferentielWithAggregatesFilter<$PrismaModel> | $Enums.Referentiel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReferentielFilter<$PrismaModel>
    _max?: NestedEnumReferentielFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type coursCreateWithoutFormateurInput = {
    categorie: string
    titre: string
    description: string
    photoCours?: string | null
    dateCreation: Date | string
    suiviCours?: suiviCoursCreateNestedManyWithoutCoursInput
    chapitre?: chapitreCreateNestedManyWithoutCoursInput
  }

  export type coursUncheckedCreateWithoutFormateurInput = {
    id_cours?: number
    categorie: string
    titre: string
    description: string
    photoCours?: string | null
    dateCreation: Date | string
    suiviCours?: suiviCoursUncheckedCreateNestedManyWithoutCoursInput
    chapitre?: chapitreUncheckedCreateNestedManyWithoutCoursInput
  }

  export type coursCreateOrConnectWithoutFormateurInput = {
    where: coursWhereUniqueInput
    create: XOR<coursCreateWithoutFormateurInput, coursUncheckedCreateWithoutFormateurInput>
  }

  export type coursCreateManyFormateurInputEnvelope = {
    data: coursCreateManyFormateurInput | coursCreateManyFormateurInput[]
    skipDuplicates?: boolean
  }

  export type veilleCreateWithoutFormateurInput = {
    titre: string
    lien_docDonnee: string
    lien_docRendu?: string | null
    date_creation: Date | string
    date_fin: Date | string
    referentiel: $Enums.Referentiel
    apprenant?: apprenantCreateNestedOneWithoutVeilleInput
    Soumission?: SoumissionCreateNestedManyWithoutVeilleInput
  }

  export type veilleUncheckedCreateWithoutFormateurInput = {
    id_veille?: number
    titre: string
    lien_docDonnee: string
    lien_docRendu?: string | null
    date_creation: Date | string
    date_fin: Date | string
    referentiel: $Enums.Referentiel
    id_apprenant?: number | null
    Soumission?: SoumissionUncheckedCreateNestedManyWithoutVeilleInput
  }

  export type veilleCreateOrConnectWithoutFormateurInput = {
    where: veilleWhereUniqueInput
    create: XOR<veilleCreateWithoutFormateurInput, veilleUncheckedCreateWithoutFormateurInput>
  }

  export type veilleCreateManyFormateurInputEnvelope = {
    data: veilleCreateManyFormateurInput | veilleCreateManyFormateurInput[]
    skipDuplicates?: boolean
  }

  export type coursUpsertWithWhereUniqueWithoutFormateurInput = {
    where: coursWhereUniqueInput
    update: XOR<coursUpdateWithoutFormateurInput, coursUncheckedUpdateWithoutFormateurInput>
    create: XOR<coursCreateWithoutFormateurInput, coursUncheckedCreateWithoutFormateurInput>
  }

  export type coursUpdateWithWhereUniqueWithoutFormateurInput = {
    where: coursWhereUniqueInput
    data: XOR<coursUpdateWithoutFormateurInput, coursUncheckedUpdateWithoutFormateurInput>
  }

  export type coursUpdateManyWithWhereWithoutFormateurInput = {
    where: coursScalarWhereInput
    data: XOR<coursUpdateManyMutationInput, coursUncheckedUpdateManyWithoutFormateurInput>
  }

  export type coursScalarWhereInput = {
    AND?: coursScalarWhereInput | coursScalarWhereInput[]
    OR?: coursScalarWhereInput[]
    NOT?: coursScalarWhereInput | coursScalarWhereInput[]
    id_cours?: IntFilter<"cours"> | number
    categorie?: StringFilter<"cours"> | string
    titre?: StringFilter<"cours"> | string
    description?: StringFilter<"cours"> | string
    photoCours?: StringNullableFilter<"cours"> | string | null
    dateCreation?: DateTimeFilter<"cours"> | Date | string
    id_formateur?: IntFilter<"cours"> | number
  }

  export type veilleUpsertWithWhereUniqueWithoutFormateurInput = {
    where: veilleWhereUniqueInput
    update: XOR<veilleUpdateWithoutFormateurInput, veilleUncheckedUpdateWithoutFormateurInput>
    create: XOR<veilleCreateWithoutFormateurInput, veilleUncheckedCreateWithoutFormateurInput>
  }

  export type veilleUpdateWithWhereUniqueWithoutFormateurInput = {
    where: veilleWhereUniqueInput
    data: XOR<veilleUpdateWithoutFormateurInput, veilleUncheckedUpdateWithoutFormateurInput>
  }

  export type veilleUpdateManyWithWhereWithoutFormateurInput = {
    where: veilleScalarWhereInput
    data: XOR<veilleUpdateManyMutationInput, veilleUncheckedUpdateManyWithoutFormateurInput>
  }

  export type veilleScalarWhereInput = {
    AND?: veilleScalarWhereInput | veilleScalarWhereInput[]
    OR?: veilleScalarWhereInput[]
    NOT?: veilleScalarWhereInput | veilleScalarWhereInput[]
    id_veille?: IntFilter<"veille"> | number
    titre?: StringFilter<"veille"> | string
    lien_docDonnee?: StringFilter<"veille"> | string
    lien_docRendu?: StringNullableFilter<"veille"> | string | null
    date_creation?: DateTimeFilter<"veille"> | Date | string
    date_fin?: DateTimeFilter<"veille"> | Date | string
    referentiel?: EnumReferentielFilter<"veille"> | $Enums.Referentiel
    id_apprenant?: IntNullableFilter<"veille"> | number | null
    id_formateur?: IntFilter<"veille"> | number
  }

  export type veilleCreateWithoutApprenantInput = {
    titre: string
    lien_docDonnee: string
    lien_docRendu?: string | null
    date_creation: Date | string
    date_fin: Date | string
    referentiel: $Enums.Referentiel
    formateur: formateurCreateNestedOneWithoutVeilleInput
    Soumission?: SoumissionCreateNestedManyWithoutVeilleInput
  }

  export type veilleUncheckedCreateWithoutApprenantInput = {
    id_veille?: number
    titre: string
    lien_docDonnee: string
    lien_docRendu?: string | null
    date_creation: Date | string
    date_fin: Date | string
    referentiel: $Enums.Referentiel
    id_formateur: number
    Soumission?: SoumissionUncheckedCreateNestedManyWithoutVeilleInput
  }

  export type veilleCreateOrConnectWithoutApprenantInput = {
    where: veilleWhereUniqueInput
    create: XOR<veilleCreateWithoutApprenantInput, veilleUncheckedCreateWithoutApprenantInput>
  }

  export type veilleCreateManyApprenantInputEnvelope = {
    data: veilleCreateManyApprenantInput | veilleCreateManyApprenantInput[]
    skipDuplicates?: boolean
  }

  export type suiviCoursCreateWithoutApprenantInput = {
    dateDebut: Date | string
    dateFin?: Date | string | null
    pourcentage: Decimal | DecimalJsLike | number | string
    cours: coursCreateNestedOneWithoutSuiviCoursInput
  }

  export type suiviCoursUncheckedCreateWithoutApprenantInput = {
    id_suiviCours?: number
    dateDebut: Date | string
    dateFin?: Date | string | null
    pourcentage: Decimal | DecimalJsLike | number | string
    id_cours: number
  }

  export type suiviCoursCreateOrConnectWithoutApprenantInput = {
    where: suiviCoursWhereUniqueInput
    create: XOR<suiviCoursCreateWithoutApprenantInput, suiviCoursUncheckedCreateWithoutApprenantInput>
  }

  export type suiviCoursCreateManyApprenantInputEnvelope = {
    data: suiviCoursCreateManyApprenantInput | suiviCoursCreateManyApprenantInput[]
    skipDuplicates?: boolean
  }

  export type SoumissionCreateWithoutApprenantInput = {
    lien_soumission: string
    date_soumission?: Date | string
    veille: veilleCreateNestedOneWithoutSoumissionInput
  }

  export type SoumissionUncheckedCreateWithoutApprenantInput = {
    id_soumission?: number
    id_veille: number
    lien_soumission: string
    date_soumission?: Date | string
  }

  export type SoumissionCreateOrConnectWithoutApprenantInput = {
    where: SoumissionWhereUniqueInput
    create: XOR<SoumissionCreateWithoutApprenantInput, SoumissionUncheckedCreateWithoutApprenantInput>
  }

  export type SoumissionCreateManyApprenantInputEnvelope = {
    data: SoumissionCreateManyApprenantInput | SoumissionCreateManyApprenantInput[]
    skipDuplicates?: boolean
  }

  export type veilleUpsertWithWhereUniqueWithoutApprenantInput = {
    where: veilleWhereUniqueInput
    update: XOR<veilleUpdateWithoutApprenantInput, veilleUncheckedUpdateWithoutApprenantInput>
    create: XOR<veilleCreateWithoutApprenantInput, veilleUncheckedCreateWithoutApprenantInput>
  }

  export type veilleUpdateWithWhereUniqueWithoutApprenantInput = {
    where: veilleWhereUniqueInput
    data: XOR<veilleUpdateWithoutApprenantInput, veilleUncheckedUpdateWithoutApprenantInput>
  }

  export type veilleUpdateManyWithWhereWithoutApprenantInput = {
    where: veilleScalarWhereInput
    data: XOR<veilleUpdateManyMutationInput, veilleUncheckedUpdateManyWithoutApprenantInput>
  }

  export type suiviCoursUpsertWithWhereUniqueWithoutApprenantInput = {
    where: suiviCoursWhereUniqueInput
    update: XOR<suiviCoursUpdateWithoutApprenantInput, suiviCoursUncheckedUpdateWithoutApprenantInput>
    create: XOR<suiviCoursCreateWithoutApprenantInput, suiviCoursUncheckedCreateWithoutApprenantInput>
  }

  export type suiviCoursUpdateWithWhereUniqueWithoutApprenantInput = {
    where: suiviCoursWhereUniqueInput
    data: XOR<suiviCoursUpdateWithoutApprenantInput, suiviCoursUncheckedUpdateWithoutApprenantInput>
  }

  export type suiviCoursUpdateManyWithWhereWithoutApprenantInput = {
    where: suiviCoursScalarWhereInput
    data: XOR<suiviCoursUpdateManyMutationInput, suiviCoursUncheckedUpdateManyWithoutApprenantInput>
  }

  export type suiviCoursScalarWhereInput = {
    AND?: suiviCoursScalarWhereInput | suiviCoursScalarWhereInput[]
    OR?: suiviCoursScalarWhereInput[]
    NOT?: suiviCoursScalarWhereInput | suiviCoursScalarWhereInput[]
    id_suiviCours?: IntFilter<"suiviCours"> | number
    dateDebut?: DateTimeFilter<"suiviCours"> | Date | string
    dateFin?: DateTimeNullableFilter<"suiviCours"> | Date | string | null
    pourcentage?: DecimalFilter<"suiviCours"> | Decimal | DecimalJsLike | number | string
    id_apprenant?: IntFilter<"suiviCours"> | number
    id_cours?: IntFilter<"suiviCours"> | number
  }

  export type SoumissionUpsertWithWhereUniqueWithoutApprenantInput = {
    where: SoumissionWhereUniqueInput
    update: XOR<SoumissionUpdateWithoutApprenantInput, SoumissionUncheckedUpdateWithoutApprenantInput>
    create: XOR<SoumissionCreateWithoutApprenantInput, SoumissionUncheckedCreateWithoutApprenantInput>
  }

  export type SoumissionUpdateWithWhereUniqueWithoutApprenantInput = {
    where: SoumissionWhereUniqueInput
    data: XOR<SoumissionUpdateWithoutApprenantInput, SoumissionUncheckedUpdateWithoutApprenantInput>
  }

  export type SoumissionUpdateManyWithWhereWithoutApprenantInput = {
    where: SoumissionScalarWhereInput
    data: XOR<SoumissionUpdateManyMutationInput, SoumissionUncheckedUpdateManyWithoutApprenantInput>
  }

  export type SoumissionScalarWhereInput = {
    AND?: SoumissionScalarWhereInput | SoumissionScalarWhereInput[]
    OR?: SoumissionScalarWhereInput[]
    NOT?: SoumissionScalarWhereInput | SoumissionScalarWhereInput[]
    id_soumission?: IntFilter<"Soumission"> | number
    id_veille?: IntFilter<"Soumission"> | number
    id_apprenant?: IntFilter<"Soumission"> | number
    lien_soumission?: StringFilter<"Soumission"> | string
    date_soumission?: DateTimeFilter<"Soumission"> | Date | string
  }

  export type apprenantCreateWithoutSuiviCoursInput = {
    nom: string
    prenom: string
    email: string
    password?: string
    referentiel: $Enums.Referentiel
    photoProfil?: string | null
    veille?: veilleCreateNestedManyWithoutApprenantInput
    Soumission?: SoumissionCreateNestedManyWithoutApprenantInput
  }

  export type apprenantUncheckedCreateWithoutSuiviCoursInput = {
    id_apprenant?: number
    nom: string
    prenom: string
    email: string
    password?: string
    referentiel: $Enums.Referentiel
    photoProfil?: string | null
    veille?: veilleUncheckedCreateNestedManyWithoutApprenantInput
    Soumission?: SoumissionUncheckedCreateNestedManyWithoutApprenantInput
  }

  export type apprenantCreateOrConnectWithoutSuiviCoursInput = {
    where: apprenantWhereUniqueInput
    create: XOR<apprenantCreateWithoutSuiviCoursInput, apprenantUncheckedCreateWithoutSuiviCoursInput>
  }

  export type coursCreateWithoutSuiviCoursInput = {
    categorie: string
    titre: string
    description: string
    photoCours?: string | null
    dateCreation: Date | string
    formateur: formateurCreateNestedOneWithoutCoursInput
    chapitre?: chapitreCreateNestedManyWithoutCoursInput
  }

  export type coursUncheckedCreateWithoutSuiviCoursInput = {
    id_cours?: number
    categorie: string
    titre: string
    description: string
    photoCours?: string | null
    dateCreation: Date | string
    id_formateur: number
    chapitre?: chapitreUncheckedCreateNestedManyWithoutCoursInput
  }

  export type coursCreateOrConnectWithoutSuiviCoursInput = {
    where: coursWhereUniqueInput
    create: XOR<coursCreateWithoutSuiviCoursInput, coursUncheckedCreateWithoutSuiviCoursInput>
  }

  export type apprenantUpsertWithoutSuiviCoursInput = {
    update: XOR<apprenantUpdateWithoutSuiviCoursInput, apprenantUncheckedUpdateWithoutSuiviCoursInput>
    create: XOR<apprenantCreateWithoutSuiviCoursInput, apprenantUncheckedCreateWithoutSuiviCoursInput>
    where?: apprenantWhereInput
  }

  export type apprenantUpdateToOneWithWhereWithoutSuiviCoursInput = {
    where?: apprenantWhereInput
    data: XOR<apprenantUpdateWithoutSuiviCoursInput, apprenantUncheckedUpdateWithoutSuiviCoursInput>
  }

  export type apprenantUpdateWithoutSuiviCoursInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referentiel?: EnumReferentielFieldUpdateOperationsInput | $Enums.Referentiel
    photoProfil?: NullableStringFieldUpdateOperationsInput | string | null
    veille?: veilleUpdateManyWithoutApprenantNestedInput
    Soumission?: SoumissionUpdateManyWithoutApprenantNestedInput
  }

  export type apprenantUncheckedUpdateWithoutSuiviCoursInput = {
    id_apprenant?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referentiel?: EnumReferentielFieldUpdateOperationsInput | $Enums.Referentiel
    photoProfil?: NullableStringFieldUpdateOperationsInput | string | null
    veille?: veilleUncheckedUpdateManyWithoutApprenantNestedInput
    Soumission?: SoumissionUncheckedUpdateManyWithoutApprenantNestedInput
  }

  export type coursUpsertWithoutSuiviCoursInput = {
    update: XOR<coursUpdateWithoutSuiviCoursInput, coursUncheckedUpdateWithoutSuiviCoursInput>
    create: XOR<coursCreateWithoutSuiviCoursInput, coursUncheckedCreateWithoutSuiviCoursInput>
    where?: coursWhereInput
  }

  export type coursUpdateToOneWithWhereWithoutSuiviCoursInput = {
    where?: coursWhereInput
    data: XOR<coursUpdateWithoutSuiviCoursInput, coursUncheckedUpdateWithoutSuiviCoursInput>
  }

  export type coursUpdateWithoutSuiviCoursInput = {
    categorie?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoCours?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    formateur?: formateurUpdateOneRequiredWithoutCoursNestedInput
    chapitre?: chapitreUpdateManyWithoutCoursNestedInput
  }

  export type coursUncheckedUpdateWithoutSuiviCoursInput = {
    id_cours?: IntFieldUpdateOperationsInput | number
    categorie?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoCours?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    id_formateur?: IntFieldUpdateOperationsInput | number
    chapitre?: chapitreUncheckedUpdateManyWithoutCoursNestedInput
  }

  export type formateurCreateWithoutCoursInput = {
    nom: string
    prenom: string
    email: string
    password?: string
    referentiel: $Enums.Referentiel
    veille?: veilleCreateNestedManyWithoutFormateurInput
  }

  export type formateurUncheckedCreateWithoutCoursInput = {
    id_formateur?: number
    nom: string
    prenom: string
    email: string
    password?: string
    referentiel: $Enums.Referentiel
    veille?: veilleUncheckedCreateNestedManyWithoutFormateurInput
  }

  export type formateurCreateOrConnectWithoutCoursInput = {
    where: formateurWhereUniqueInput
    create: XOR<formateurCreateWithoutCoursInput, formateurUncheckedCreateWithoutCoursInput>
  }

  export type suiviCoursCreateWithoutCoursInput = {
    dateDebut: Date | string
    dateFin?: Date | string | null
    pourcentage: Decimal | DecimalJsLike | number | string
    apprenant: apprenantCreateNestedOneWithoutSuiviCoursInput
  }

  export type suiviCoursUncheckedCreateWithoutCoursInput = {
    id_suiviCours?: number
    dateDebut: Date | string
    dateFin?: Date | string | null
    pourcentage: Decimal | DecimalJsLike | number | string
    id_apprenant: number
  }

  export type suiviCoursCreateOrConnectWithoutCoursInput = {
    where: suiviCoursWhereUniqueInput
    create: XOR<suiviCoursCreateWithoutCoursInput, suiviCoursUncheckedCreateWithoutCoursInput>
  }

  export type suiviCoursCreateManyCoursInputEnvelope = {
    data: suiviCoursCreateManyCoursInput | suiviCoursCreateManyCoursInput[]
    skipDuplicates?: boolean
  }

  export type chapitreCreateWithoutCoursInput = {
    titre: string
    numeroOrdre: number
    lecon?: leconCreateNestedManyWithoutChapitreInput
  }

  export type chapitreUncheckedCreateWithoutCoursInput = {
    id_chapitre?: number
    titre: string
    numeroOrdre: number
    lecon?: leconUncheckedCreateNestedManyWithoutChapitreInput
  }

  export type chapitreCreateOrConnectWithoutCoursInput = {
    where: chapitreWhereUniqueInput
    create: XOR<chapitreCreateWithoutCoursInput, chapitreUncheckedCreateWithoutCoursInput>
  }

  export type chapitreCreateManyCoursInputEnvelope = {
    data: chapitreCreateManyCoursInput | chapitreCreateManyCoursInput[]
    skipDuplicates?: boolean
  }

  export type formateurUpsertWithoutCoursInput = {
    update: XOR<formateurUpdateWithoutCoursInput, formateurUncheckedUpdateWithoutCoursInput>
    create: XOR<formateurCreateWithoutCoursInput, formateurUncheckedCreateWithoutCoursInput>
    where?: formateurWhereInput
  }

  export type formateurUpdateToOneWithWhereWithoutCoursInput = {
    where?: formateurWhereInput
    data: XOR<formateurUpdateWithoutCoursInput, formateurUncheckedUpdateWithoutCoursInput>
  }

  export type formateurUpdateWithoutCoursInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referentiel?: EnumReferentielFieldUpdateOperationsInput | $Enums.Referentiel
    veille?: veilleUpdateManyWithoutFormateurNestedInput
  }

  export type formateurUncheckedUpdateWithoutCoursInput = {
    id_formateur?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referentiel?: EnumReferentielFieldUpdateOperationsInput | $Enums.Referentiel
    veille?: veilleUncheckedUpdateManyWithoutFormateurNestedInput
  }

  export type suiviCoursUpsertWithWhereUniqueWithoutCoursInput = {
    where: suiviCoursWhereUniqueInput
    update: XOR<suiviCoursUpdateWithoutCoursInput, suiviCoursUncheckedUpdateWithoutCoursInput>
    create: XOR<suiviCoursCreateWithoutCoursInput, suiviCoursUncheckedCreateWithoutCoursInput>
  }

  export type suiviCoursUpdateWithWhereUniqueWithoutCoursInput = {
    where: suiviCoursWhereUniqueInput
    data: XOR<suiviCoursUpdateWithoutCoursInput, suiviCoursUncheckedUpdateWithoutCoursInput>
  }

  export type suiviCoursUpdateManyWithWhereWithoutCoursInput = {
    where: suiviCoursScalarWhereInput
    data: XOR<suiviCoursUpdateManyMutationInput, suiviCoursUncheckedUpdateManyWithoutCoursInput>
  }

  export type chapitreUpsertWithWhereUniqueWithoutCoursInput = {
    where: chapitreWhereUniqueInput
    update: XOR<chapitreUpdateWithoutCoursInput, chapitreUncheckedUpdateWithoutCoursInput>
    create: XOR<chapitreCreateWithoutCoursInput, chapitreUncheckedCreateWithoutCoursInput>
  }

  export type chapitreUpdateWithWhereUniqueWithoutCoursInput = {
    where: chapitreWhereUniqueInput
    data: XOR<chapitreUpdateWithoutCoursInput, chapitreUncheckedUpdateWithoutCoursInput>
  }

  export type chapitreUpdateManyWithWhereWithoutCoursInput = {
    where: chapitreScalarWhereInput
    data: XOR<chapitreUpdateManyMutationInput, chapitreUncheckedUpdateManyWithoutCoursInput>
  }

  export type chapitreScalarWhereInput = {
    AND?: chapitreScalarWhereInput | chapitreScalarWhereInput[]
    OR?: chapitreScalarWhereInput[]
    NOT?: chapitreScalarWhereInput | chapitreScalarWhereInput[]
    id_chapitre?: IntFilter<"chapitre"> | number
    titre?: StringFilter<"chapitre"> | string
    numeroOrdre?: IntFilter<"chapitre"> | number
    id_cours?: IntFilter<"chapitre"> | number
  }

  export type coursCreateWithoutChapitreInput = {
    categorie: string
    titre: string
    description: string
    photoCours?: string | null
    dateCreation: Date | string
    formateur: formateurCreateNestedOneWithoutCoursInput
    suiviCours?: suiviCoursCreateNestedManyWithoutCoursInput
  }

  export type coursUncheckedCreateWithoutChapitreInput = {
    id_cours?: number
    categorie: string
    titre: string
    description: string
    photoCours?: string | null
    dateCreation: Date | string
    id_formateur: number
    suiviCours?: suiviCoursUncheckedCreateNestedManyWithoutCoursInput
  }

  export type coursCreateOrConnectWithoutChapitreInput = {
    where: coursWhereUniqueInput
    create: XOR<coursCreateWithoutChapitreInput, coursUncheckedCreateWithoutChapitreInput>
  }

  export type leconCreateWithoutChapitreInput = {
    titre: string
    contenuTextuel?: string | null
    contenuVideo?: string | null
    numeroOrdre: number
  }

  export type leconUncheckedCreateWithoutChapitreInput = {
    id_lecon?: number
    titre: string
    contenuTextuel?: string | null
    contenuVideo?: string | null
    numeroOrdre: number
  }

  export type leconCreateOrConnectWithoutChapitreInput = {
    where: leconWhereUniqueInput
    create: XOR<leconCreateWithoutChapitreInput, leconUncheckedCreateWithoutChapitreInput>
  }

  export type leconCreateManyChapitreInputEnvelope = {
    data: leconCreateManyChapitreInput | leconCreateManyChapitreInput[]
    skipDuplicates?: boolean
  }

  export type coursUpsertWithoutChapitreInput = {
    update: XOR<coursUpdateWithoutChapitreInput, coursUncheckedUpdateWithoutChapitreInput>
    create: XOR<coursCreateWithoutChapitreInput, coursUncheckedCreateWithoutChapitreInput>
    where?: coursWhereInput
  }

  export type coursUpdateToOneWithWhereWithoutChapitreInput = {
    where?: coursWhereInput
    data: XOR<coursUpdateWithoutChapitreInput, coursUncheckedUpdateWithoutChapitreInput>
  }

  export type coursUpdateWithoutChapitreInput = {
    categorie?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoCours?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    formateur?: formateurUpdateOneRequiredWithoutCoursNestedInput
    suiviCours?: suiviCoursUpdateManyWithoutCoursNestedInput
  }

  export type coursUncheckedUpdateWithoutChapitreInput = {
    id_cours?: IntFieldUpdateOperationsInput | number
    categorie?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoCours?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    id_formateur?: IntFieldUpdateOperationsInput | number
    suiviCours?: suiviCoursUncheckedUpdateManyWithoutCoursNestedInput
  }

  export type leconUpsertWithWhereUniqueWithoutChapitreInput = {
    where: leconWhereUniqueInput
    update: XOR<leconUpdateWithoutChapitreInput, leconUncheckedUpdateWithoutChapitreInput>
    create: XOR<leconCreateWithoutChapitreInput, leconUncheckedCreateWithoutChapitreInput>
  }

  export type leconUpdateWithWhereUniqueWithoutChapitreInput = {
    where: leconWhereUniqueInput
    data: XOR<leconUpdateWithoutChapitreInput, leconUncheckedUpdateWithoutChapitreInput>
  }

  export type leconUpdateManyWithWhereWithoutChapitreInput = {
    where: leconScalarWhereInput
    data: XOR<leconUpdateManyMutationInput, leconUncheckedUpdateManyWithoutChapitreInput>
  }

  export type leconScalarWhereInput = {
    AND?: leconScalarWhereInput | leconScalarWhereInput[]
    OR?: leconScalarWhereInput[]
    NOT?: leconScalarWhereInput | leconScalarWhereInput[]
    id_lecon?: IntFilter<"lecon"> | number
    titre?: StringFilter<"lecon"> | string
    contenuTextuel?: StringNullableFilter<"lecon"> | string | null
    contenuVideo?: StringNullableFilter<"lecon"> | string | null
    numeroOrdre?: IntFilter<"lecon"> | number
    id_chapitre?: IntFilter<"lecon"> | number
  }

  export type chapitreCreateWithoutLeconInput = {
    titre: string
    numeroOrdre: number
    cours: coursCreateNestedOneWithoutChapitreInput
  }

  export type chapitreUncheckedCreateWithoutLeconInput = {
    id_chapitre?: number
    titre: string
    numeroOrdre: number
    id_cours: number
  }

  export type chapitreCreateOrConnectWithoutLeconInput = {
    where: chapitreWhereUniqueInput
    create: XOR<chapitreCreateWithoutLeconInput, chapitreUncheckedCreateWithoutLeconInput>
  }

  export type chapitreUpsertWithoutLeconInput = {
    update: XOR<chapitreUpdateWithoutLeconInput, chapitreUncheckedUpdateWithoutLeconInput>
    create: XOR<chapitreCreateWithoutLeconInput, chapitreUncheckedCreateWithoutLeconInput>
    where?: chapitreWhereInput
  }

  export type chapitreUpdateToOneWithWhereWithoutLeconInput = {
    where?: chapitreWhereInput
    data: XOR<chapitreUpdateWithoutLeconInput, chapitreUncheckedUpdateWithoutLeconInput>
  }

  export type chapitreUpdateWithoutLeconInput = {
    titre?: StringFieldUpdateOperationsInput | string
    numeroOrdre?: IntFieldUpdateOperationsInput | number
    cours?: coursUpdateOneRequiredWithoutChapitreNestedInput
  }

  export type chapitreUncheckedUpdateWithoutLeconInput = {
    id_chapitre?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    numeroOrdre?: IntFieldUpdateOperationsInput | number
    id_cours?: IntFieldUpdateOperationsInput | number
  }

  export type formateurCreateWithoutVeilleInput = {
    nom: string
    prenom: string
    email: string
    password?: string
    referentiel: $Enums.Referentiel
    cours?: coursCreateNestedManyWithoutFormateurInput
  }

  export type formateurUncheckedCreateWithoutVeilleInput = {
    id_formateur?: number
    nom: string
    prenom: string
    email: string
    password?: string
    referentiel: $Enums.Referentiel
    cours?: coursUncheckedCreateNestedManyWithoutFormateurInput
  }

  export type formateurCreateOrConnectWithoutVeilleInput = {
    where: formateurWhereUniqueInput
    create: XOR<formateurCreateWithoutVeilleInput, formateurUncheckedCreateWithoutVeilleInput>
  }

  export type apprenantCreateWithoutVeilleInput = {
    nom: string
    prenom: string
    email: string
    password?: string
    referentiel: $Enums.Referentiel
    photoProfil?: string | null
    suiviCours?: suiviCoursCreateNestedManyWithoutApprenantInput
    Soumission?: SoumissionCreateNestedManyWithoutApprenantInput
  }

  export type apprenantUncheckedCreateWithoutVeilleInput = {
    id_apprenant?: number
    nom: string
    prenom: string
    email: string
    password?: string
    referentiel: $Enums.Referentiel
    photoProfil?: string | null
    suiviCours?: suiviCoursUncheckedCreateNestedManyWithoutApprenantInput
    Soumission?: SoumissionUncheckedCreateNestedManyWithoutApprenantInput
  }

  export type apprenantCreateOrConnectWithoutVeilleInput = {
    where: apprenantWhereUniqueInput
    create: XOR<apprenantCreateWithoutVeilleInput, apprenantUncheckedCreateWithoutVeilleInput>
  }

  export type SoumissionCreateWithoutVeilleInput = {
    lien_soumission: string
    date_soumission?: Date | string
    apprenant: apprenantCreateNestedOneWithoutSoumissionInput
  }

  export type SoumissionUncheckedCreateWithoutVeilleInput = {
    id_soumission?: number
    id_apprenant: number
    lien_soumission: string
    date_soumission?: Date | string
  }

  export type SoumissionCreateOrConnectWithoutVeilleInput = {
    where: SoumissionWhereUniqueInput
    create: XOR<SoumissionCreateWithoutVeilleInput, SoumissionUncheckedCreateWithoutVeilleInput>
  }

  export type SoumissionCreateManyVeilleInputEnvelope = {
    data: SoumissionCreateManyVeilleInput | SoumissionCreateManyVeilleInput[]
    skipDuplicates?: boolean
  }

  export type formateurUpsertWithoutVeilleInput = {
    update: XOR<formateurUpdateWithoutVeilleInput, formateurUncheckedUpdateWithoutVeilleInput>
    create: XOR<formateurCreateWithoutVeilleInput, formateurUncheckedCreateWithoutVeilleInput>
    where?: formateurWhereInput
  }

  export type formateurUpdateToOneWithWhereWithoutVeilleInput = {
    where?: formateurWhereInput
    data: XOR<formateurUpdateWithoutVeilleInput, formateurUncheckedUpdateWithoutVeilleInput>
  }

  export type formateurUpdateWithoutVeilleInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referentiel?: EnumReferentielFieldUpdateOperationsInput | $Enums.Referentiel
    cours?: coursUpdateManyWithoutFormateurNestedInput
  }

  export type formateurUncheckedUpdateWithoutVeilleInput = {
    id_formateur?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referentiel?: EnumReferentielFieldUpdateOperationsInput | $Enums.Referentiel
    cours?: coursUncheckedUpdateManyWithoutFormateurNestedInput
  }

  export type apprenantUpsertWithoutVeilleInput = {
    update: XOR<apprenantUpdateWithoutVeilleInput, apprenantUncheckedUpdateWithoutVeilleInput>
    create: XOR<apprenantCreateWithoutVeilleInput, apprenantUncheckedCreateWithoutVeilleInput>
    where?: apprenantWhereInput
  }

  export type apprenantUpdateToOneWithWhereWithoutVeilleInput = {
    where?: apprenantWhereInput
    data: XOR<apprenantUpdateWithoutVeilleInput, apprenantUncheckedUpdateWithoutVeilleInput>
  }

  export type apprenantUpdateWithoutVeilleInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referentiel?: EnumReferentielFieldUpdateOperationsInput | $Enums.Referentiel
    photoProfil?: NullableStringFieldUpdateOperationsInput | string | null
    suiviCours?: suiviCoursUpdateManyWithoutApprenantNestedInput
    Soumission?: SoumissionUpdateManyWithoutApprenantNestedInput
  }

  export type apprenantUncheckedUpdateWithoutVeilleInput = {
    id_apprenant?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referentiel?: EnumReferentielFieldUpdateOperationsInput | $Enums.Referentiel
    photoProfil?: NullableStringFieldUpdateOperationsInput | string | null
    suiviCours?: suiviCoursUncheckedUpdateManyWithoutApprenantNestedInput
    Soumission?: SoumissionUncheckedUpdateManyWithoutApprenantNestedInput
  }

  export type SoumissionUpsertWithWhereUniqueWithoutVeilleInput = {
    where: SoumissionWhereUniqueInput
    update: XOR<SoumissionUpdateWithoutVeilleInput, SoumissionUncheckedUpdateWithoutVeilleInput>
    create: XOR<SoumissionCreateWithoutVeilleInput, SoumissionUncheckedCreateWithoutVeilleInput>
  }

  export type SoumissionUpdateWithWhereUniqueWithoutVeilleInput = {
    where: SoumissionWhereUniqueInput
    data: XOR<SoumissionUpdateWithoutVeilleInput, SoumissionUncheckedUpdateWithoutVeilleInput>
  }

  export type SoumissionUpdateManyWithWhereWithoutVeilleInput = {
    where: SoumissionScalarWhereInput
    data: XOR<SoumissionUpdateManyMutationInput, SoumissionUncheckedUpdateManyWithoutVeilleInput>
  }

  export type veilleCreateWithoutSoumissionInput = {
    titre: string
    lien_docDonnee: string
    lien_docRendu?: string | null
    date_creation: Date | string
    date_fin: Date | string
    referentiel: $Enums.Referentiel
    formateur: formateurCreateNestedOneWithoutVeilleInput
    apprenant?: apprenantCreateNestedOneWithoutVeilleInput
  }

  export type veilleUncheckedCreateWithoutSoumissionInput = {
    id_veille?: number
    titre: string
    lien_docDonnee: string
    lien_docRendu?: string | null
    date_creation: Date | string
    date_fin: Date | string
    referentiel: $Enums.Referentiel
    id_apprenant?: number | null
    id_formateur: number
  }

  export type veilleCreateOrConnectWithoutSoumissionInput = {
    where: veilleWhereUniqueInput
    create: XOR<veilleCreateWithoutSoumissionInput, veilleUncheckedCreateWithoutSoumissionInput>
  }

  export type apprenantCreateWithoutSoumissionInput = {
    nom: string
    prenom: string
    email: string
    password?: string
    referentiel: $Enums.Referentiel
    photoProfil?: string | null
    veille?: veilleCreateNestedManyWithoutApprenantInput
    suiviCours?: suiviCoursCreateNestedManyWithoutApprenantInput
  }

  export type apprenantUncheckedCreateWithoutSoumissionInput = {
    id_apprenant?: number
    nom: string
    prenom: string
    email: string
    password?: string
    referentiel: $Enums.Referentiel
    photoProfil?: string | null
    veille?: veilleUncheckedCreateNestedManyWithoutApprenantInput
    suiviCours?: suiviCoursUncheckedCreateNestedManyWithoutApprenantInput
  }

  export type apprenantCreateOrConnectWithoutSoumissionInput = {
    where: apprenantWhereUniqueInput
    create: XOR<apprenantCreateWithoutSoumissionInput, apprenantUncheckedCreateWithoutSoumissionInput>
  }

  export type veilleUpsertWithoutSoumissionInput = {
    update: XOR<veilleUpdateWithoutSoumissionInput, veilleUncheckedUpdateWithoutSoumissionInput>
    create: XOR<veilleCreateWithoutSoumissionInput, veilleUncheckedCreateWithoutSoumissionInput>
    where?: veilleWhereInput
  }

  export type veilleUpdateToOneWithWhereWithoutSoumissionInput = {
    where?: veilleWhereInput
    data: XOR<veilleUpdateWithoutSoumissionInput, veilleUncheckedUpdateWithoutSoumissionInput>
  }

  export type veilleUpdateWithoutSoumissionInput = {
    titre?: StringFieldUpdateOperationsInput | string
    lien_docDonnee?: StringFieldUpdateOperationsInput | string
    lien_docRendu?: NullableStringFieldUpdateOperationsInput | string | null
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    referentiel?: EnumReferentielFieldUpdateOperationsInput | $Enums.Referentiel
    formateur?: formateurUpdateOneRequiredWithoutVeilleNestedInput
    apprenant?: apprenantUpdateOneWithoutVeilleNestedInput
  }

  export type veilleUncheckedUpdateWithoutSoumissionInput = {
    id_veille?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    lien_docDonnee?: StringFieldUpdateOperationsInput | string
    lien_docRendu?: NullableStringFieldUpdateOperationsInput | string | null
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    referentiel?: EnumReferentielFieldUpdateOperationsInput | $Enums.Referentiel
    id_apprenant?: NullableIntFieldUpdateOperationsInput | number | null
    id_formateur?: IntFieldUpdateOperationsInput | number
  }

  export type apprenantUpsertWithoutSoumissionInput = {
    update: XOR<apprenantUpdateWithoutSoumissionInput, apprenantUncheckedUpdateWithoutSoumissionInput>
    create: XOR<apprenantCreateWithoutSoumissionInput, apprenantUncheckedCreateWithoutSoumissionInput>
    where?: apprenantWhereInput
  }

  export type apprenantUpdateToOneWithWhereWithoutSoumissionInput = {
    where?: apprenantWhereInput
    data: XOR<apprenantUpdateWithoutSoumissionInput, apprenantUncheckedUpdateWithoutSoumissionInput>
  }

  export type apprenantUpdateWithoutSoumissionInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referentiel?: EnumReferentielFieldUpdateOperationsInput | $Enums.Referentiel
    photoProfil?: NullableStringFieldUpdateOperationsInput | string | null
    veille?: veilleUpdateManyWithoutApprenantNestedInput
    suiviCours?: suiviCoursUpdateManyWithoutApprenantNestedInput
  }

  export type apprenantUncheckedUpdateWithoutSoumissionInput = {
    id_apprenant?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    referentiel?: EnumReferentielFieldUpdateOperationsInput | $Enums.Referentiel
    photoProfil?: NullableStringFieldUpdateOperationsInput | string | null
    veille?: veilleUncheckedUpdateManyWithoutApprenantNestedInput
    suiviCours?: suiviCoursUncheckedUpdateManyWithoutApprenantNestedInput
  }

  export type coursCreateManyFormateurInput = {
    id_cours?: number
    categorie: string
    titre: string
    description: string
    photoCours?: string | null
    dateCreation: Date | string
  }

  export type veilleCreateManyFormateurInput = {
    id_veille?: number
    titre: string
    lien_docDonnee: string
    lien_docRendu?: string | null
    date_creation: Date | string
    date_fin: Date | string
    referentiel: $Enums.Referentiel
    id_apprenant?: number | null
  }

  export type coursUpdateWithoutFormateurInput = {
    categorie?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoCours?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    suiviCours?: suiviCoursUpdateManyWithoutCoursNestedInput
    chapitre?: chapitreUpdateManyWithoutCoursNestedInput
  }

  export type coursUncheckedUpdateWithoutFormateurInput = {
    id_cours?: IntFieldUpdateOperationsInput | number
    categorie?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoCours?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    suiviCours?: suiviCoursUncheckedUpdateManyWithoutCoursNestedInput
    chapitre?: chapitreUncheckedUpdateManyWithoutCoursNestedInput
  }

  export type coursUncheckedUpdateManyWithoutFormateurInput = {
    id_cours?: IntFieldUpdateOperationsInput | number
    categorie?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoCours?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type veilleUpdateWithoutFormateurInput = {
    titre?: StringFieldUpdateOperationsInput | string
    lien_docDonnee?: StringFieldUpdateOperationsInput | string
    lien_docRendu?: NullableStringFieldUpdateOperationsInput | string | null
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    referentiel?: EnumReferentielFieldUpdateOperationsInput | $Enums.Referentiel
    apprenant?: apprenantUpdateOneWithoutVeilleNestedInput
    Soumission?: SoumissionUpdateManyWithoutVeilleNestedInput
  }

  export type veilleUncheckedUpdateWithoutFormateurInput = {
    id_veille?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    lien_docDonnee?: StringFieldUpdateOperationsInput | string
    lien_docRendu?: NullableStringFieldUpdateOperationsInput | string | null
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    referentiel?: EnumReferentielFieldUpdateOperationsInput | $Enums.Referentiel
    id_apprenant?: NullableIntFieldUpdateOperationsInput | number | null
    Soumission?: SoumissionUncheckedUpdateManyWithoutVeilleNestedInput
  }

  export type veilleUncheckedUpdateManyWithoutFormateurInput = {
    id_veille?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    lien_docDonnee?: StringFieldUpdateOperationsInput | string
    lien_docRendu?: NullableStringFieldUpdateOperationsInput | string | null
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    referentiel?: EnumReferentielFieldUpdateOperationsInput | $Enums.Referentiel
    id_apprenant?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type veilleCreateManyApprenantInput = {
    id_veille?: number
    titre: string
    lien_docDonnee: string
    lien_docRendu?: string | null
    date_creation: Date | string
    date_fin: Date | string
    referentiel: $Enums.Referentiel
    id_formateur: number
  }

  export type suiviCoursCreateManyApprenantInput = {
    id_suiviCours?: number
    dateDebut: Date | string
    dateFin?: Date | string | null
    pourcentage: Decimal | DecimalJsLike | number | string
    id_cours: number
  }

  export type SoumissionCreateManyApprenantInput = {
    id_soumission?: number
    id_veille: number
    lien_soumission: string
    date_soumission?: Date | string
  }

  export type veilleUpdateWithoutApprenantInput = {
    titre?: StringFieldUpdateOperationsInput | string
    lien_docDonnee?: StringFieldUpdateOperationsInput | string
    lien_docRendu?: NullableStringFieldUpdateOperationsInput | string | null
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    referentiel?: EnumReferentielFieldUpdateOperationsInput | $Enums.Referentiel
    formateur?: formateurUpdateOneRequiredWithoutVeilleNestedInput
    Soumission?: SoumissionUpdateManyWithoutVeilleNestedInput
  }

  export type veilleUncheckedUpdateWithoutApprenantInput = {
    id_veille?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    lien_docDonnee?: StringFieldUpdateOperationsInput | string
    lien_docRendu?: NullableStringFieldUpdateOperationsInput | string | null
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    referentiel?: EnumReferentielFieldUpdateOperationsInput | $Enums.Referentiel
    id_formateur?: IntFieldUpdateOperationsInput | number
    Soumission?: SoumissionUncheckedUpdateManyWithoutVeilleNestedInput
  }

  export type veilleUncheckedUpdateManyWithoutApprenantInput = {
    id_veille?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    lien_docDonnee?: StringFieldUpdateOperationsInput | string
    lien_docRendu?: NullableStringFieldUpdateOperationsInput | string | null
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    referentiel?: EnumReferentielFieldUpdateOperationsInput | $Enums.Referentiel
    id_formateur?: IntFieldUpdateOperationsInput | number
  }

  export type suiviCoursUpdateWithoutApprenantInput = {
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pourcentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cours?: coursUpdateOneRequiredWithoutSuiviCoursNestedInput
  }

  export type suiviCoursUncheckedUpdateWithoutApprenantInput = {
    id_suiviCours?: IntFieldUpdateOperationsInput | number
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pourcentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_cours?: IntFieldUpdateOperationsInput | number
  }

  export type suiviCoursUncheckedUpdateManyWithoutApprenantInput = {
    id_suiviCours?: IntFieldUpdateOperationsInput | number
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pourcentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_cours?: IntFieldUpdateOperationsInput | number
  }

  export type SoumissionUpdateWithoutApprenantInput = {
    lien_soumission?: StringFieldUpdateOperationsInput | string
    date_soumission?: DateTimeFieldUpdateOperationsInput | Date | string
    veille?: veilleUpdateOneRequiredWithoutSoumissionNestedInput
  }

  export type SoumissionUncheckedUpdateWithoutApprenantInput = {
    id_soumission?: IntFieldUpdateOperationsInput | number
    id_veille?: IntFieldUpdateOperationsInput | number
    lien_soumission?: StringFieldUpdateOperationsInput | string
    date_soumission?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SoumissionUncheckedUpdateManyWithoutApprenantInput = {
    id_soumission?: IntFieldUpdateOperationsInput | number
    id_veille?: IntFieldUpdateOperationsInput | number
    lien_soumission?: StringFieldUpdateOperationsInput | string
    date_soumission?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type suiviCoursCreateManyCoursInput = {
    id_suiviCours?: number
    dateDebut: Date | string
    dateFin?: Date | string | null
    pourcentage: Decimal | DecimalJsLike | number | string
    id_apprenant: number
  }

  export type chapitreCreateManyCoursInput = {
    id_chapitre?: number
    titre: string
    numeroOrdre: number
  }

  export type suiviCoursUpdateWithoutCoursInput = {
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pourcentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    apprenant?: apprenantUpdateOneRequiredWithoutSuiviCoursNestedInput
  }

  export type suiviCoursUncheckedUpdateWithoutCoursInput = {
    id_suiviCours?: IntFieldUpdateOperationsInput | number
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pourcentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_apprenant?: IntFieldUpdateOperationsInput | number
  }

  export type suiviCoursUncheckedUpdateManyWithoutCoursInput = {
    id_suiviCours?: IntFieldUpdateOperationsInput | number
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pourcentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_apprenant?: IntFieldUpdateOperationsInput | number
  }

  export type chapitreUpdateWithoutCoursInput = {
    titre?: StringFieldUpdateOperationsInput | string
    numeroOrdre?: IntFieldUpdateOperationsInput | number
    lecon?: leconUpdateManyWithoutChapitreNestedInput
  }

  export type chapitreUncheckedUpdateWithoutCoursInput = {
    id_chapitre?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    numeroOrdre?: IntFieldUpdateOperationsInput | number
    lecon?: leconUncheckedUpdateManyWithoutChapitreNestedInput
  }

  export type chapitreUncheckedUpdateManyWithoutCoursInput = {
    id_chapitre?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    numeroOrdre?: IntFieldUpdateOperationsInput | number
  }

  export type leconCreateManyChapitreInput = {
    id_lecon?: number
    titre: string
    contenuTextuel?: string | null
    contenuVideo?: string | null
    numeroOrdre: number
  }

  export type leconUpdateWithoutChapitreInput = {
    titre?: StringFieldUpdateOperationsInput | string
    contenuTextuel?: NullableStringFieldUpdateOperationsInput | string | null
    contenuVideo?: NullableStringFieldUpdateOperationsInput | string | null
    numeroOrdre?: IntFieldUpdateOperationsInput | number
  }

  export type leconUncheckedUpdateWithoutChapitreInput = {
    id_lecon?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    contenuTextuel?: NullableStringFieldUpdateOperationsInput | string | null
    contenuVideo?: NullableStringFieldUpdateOperationsInput | string | null
    numeroOrdre?: IntFieldUpdateOperationsInput | number
  }

  export type leconUncheckedUpdateManyWithoutChapitreInput = {
    id_lecon?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    contenuTextuel?: NullableStringFieldUpdateOperationsInput | string | null
    contenuVideo?: NullableStringFieldUpdateOperationsInput | string | null
    numeroOrdre?: IntFieldUpdateOperationsInput | number
  }

  export type SoumissionCreateManyVeilleInput = {
    id_soumission?: number
    id_apprenant: number
    lien_soumission: string
    date_soumission?: Date | string
  }

  export type SoumissionUpdateWithoutVeilleInput = {
    lien_soumission?: StringFieldUpdateOperationsInput | string
    date_soumission?: DateTimeFieldUpdateOperationsInput | Date | string
    apprenant?: apprenantUpdateOneRequiredWithoutSoumissionNestedInput
  }

  export type SoumissionUncheckedUpdateWithoutVeilleInput = {
    id_soumission?: IntFieldUpdateOperationsInput | number
    id_apprenant?: IntFieldUpdateOperationsInput | number
    lien_soumission?: StringFieldUpdateOperationsInput | string
    date_soumission?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SoumissionUncheckedUpdateManyWithoutVeilleInput = {
    id_soumission?: IntFieldUpdateOperationsInput | number
    id_apprenant?: IntFieldUpdateOperationsInput | number
    lien_soumission?: StringFieldUpdateOperationsInput | string
    date_soumission?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}