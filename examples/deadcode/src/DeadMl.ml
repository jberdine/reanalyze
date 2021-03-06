module QQ =
  struct
    let thisSpansSeveralLines =
      (fun x -> fun y ->
          x + y : int -> int -> int)
  end

module AA : sig
  val thisIsInInterface :
    int -> int
end = struct
  let thisIsInInterface x = x
end

let thisHasSemicolons = 3;;

type thisIsDead = | DeadA | DeadB


let () = 
  let _ = 3 in
  let _ = [1,2,3] in 
  ()

module Bs_version :
  sig val version : string val header : string val package_name : string end 
  =
  struct
    let version = "7.2.0-dev.4"
    let header = "// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE"
    let package_name = "bs-platform"
  end 

type l =
  | Lfunction of   { arity : int ; 
                     params : int list ;
                     body : string 
                       }

type module_info = {
  module_name: string;
  case: bool
}

let rec map_split_opt 
  (xs : 'a list)  (f : 'a -> 'b option * 'c option) 
  : 'b list * 'c list = 
  match xs with 
  | [] -> [], []
  | x::xs ->
    let c,d = f x in 
    let cs,ds = map_split_opt xs f in 
    (match c with Some c -> c::cs | None -> cs),
    (match d with Some d -> d::ds | None -> ds)

let inline_threshold = Some (10. /. 8.);