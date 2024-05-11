import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";
import Nat32 "mo:base/Nat32";
import Text "mo:base/Text";
import Principal "mo:base/Principal";
import Debug "mo:base/Debug";

actor Areas {
	type Usuario = {
		//datos que se pediran en el registro
		nombre : Text;
		documento : Text;
		nacionalidad : Text;
		fechaNacimiento : Text;
	};

	type areaID = Nat32;
	stable var areaID : areaID = 0;

	//declarar la lista de los usuarios
	let listaUsuario = HashMap.HashMap<Principal, Usuario>(0, Principal.equal, Principal.hash);

	public query ({ caller }) func whoami() : async Principal {
		return caller;
	};

	//registro de usuarios
	public shared (msg) func crearArea(usuario : Usuario) : async Usuario {
		let identity : Principal = msg.caller;

		listaUsuario.put(identity, usuario);
		Debug.print("Nuevo usuario creado");
		return usuario;
	};

	/*public query func obtieneAreas () : async [(Text, Usuario)] {
        let areaIter : Iter.Iter<(Text, Usuario)> = listaUsuario.entries();
        let areaArray : [(Text, Usuario)] = Iter.toArray(areaIter);
        Debug.print("Areas ");

        return areaArray;
    };

    public query func obtieneArea (id: Text) : async ?Usuario {
        let area: ?Usuario = listaUsuario.get(id);
        return area;
    };

    public shared (msg) func actualizarArea (id: Text, nombre: Text) : async Bool {
        let area: ?Usuario = listaUsuario.get(id);

        switch (area) {
            case (null) {
                return false;
            };
            case (?areaActual) {
                let nuevaArea: Usuario = {nombre=nombre};
                listaUsuario.put(id, nuevaArea);
                Debug.print("Area actualizada: " # id);
                return true;
            };
        };

    };

    public func eliminarArea (id: Text) : async Bool {
        let area : ?Usuario = listaUsuario.get(id);
        switch (area) {
            case (null) {
                return false;
            };
            case (_) {
                ignore listaUsuario.remove(id);
                Debug.print("Área eliminadaD: " # id);
                return true;
            };
        };
    };*/

};
