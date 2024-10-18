type T00 = unknown & null; // null 
type T01 = string & number; // never 
type T02 = unknown & undefined; // undefined (more specific than unknown)
type T024 = unknown & null & undefined; // never (null & undefined = never)
type T03 = unknown & string; // string (more specific)
type T04 = unknown & string[]; // string[] (more specific)
type T05 = unknown & unknown; // unknown
type T06 = unknown & any; // any (any dominates)


// in union the broader type is taken
type T10 = unknown | null; // unknown (unknown is the dominant type)
type T11 = unknown | undefined; // unknown same upper reason
type T12 = unknown | null | undefined; // unknown
type T13 = unknown | string; // unknown
type T14 = unknown | string[]; // unknown 
type T15 = unknown | unknown; // unknown
type T16 = unknown | any; // any (any dominates)

function f22(x: unknown) {
  let v1: any = x; // OK (any is a supertype of unknown)
  let v2: unknown = x; // OK (unknown is the same type as unknown)

  let v3: object = x;
  // Error (unknown isn't automatically object)

  let v4: string = x;
  // Error (unknown needs casting to string)

  let v5: string[] = x;
  // Error same reason above one

  let v6: {} = x; // Error unknown not assignable to {}
  let v7: {} | null | undefined = x;
  // OK (union allows unknown here)
}

function f11(x: unknown) {
  x.foo;
  // Error (can't access properties on unknown)

  x[5];
  // Error (can't index unknown)

  x();
  // Error (can't call unknown like a function)

  new x();
  // Error (can't use new with unknown)
}
