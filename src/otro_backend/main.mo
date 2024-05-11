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
		antecedentes : Text;
		comentarios : Text;
	};

	type Id = Text;

	//declarar la lista de los usuarios
	let listaUsuario = HashMap.HashMap<Text, Usuario>(0, Text.equal, Text.hash);
	//let listaUsuario = HashMap.HashMap<Principal, Usuario>(0, Principal.equal, Principal.hash);

	/*public query ({ caller }) func whoami() : async Principal {
        return caller;
    };*/

	//registro de usuarios
	/*public shared (msg) func crearArea(usuario : Usuario) : async Usuario {
        let identity : Principal = msg.caller;

        listaUsuario.put(identity, usuario);
        Debug.print("Nuevo usuario creado");
        return usuario;
    };*/
	public shared func crearUsario(usuario : Usuario, id : Id) : async Usuario {
		listaUsuario.put(id, usuario);
		Debug.print("Nuevo usuario creado con el id" #id);
		return usuario;
	};
	public query func consultarUsuari(id : Id) : async ?Usuario {
		return listaUsuario.get(id);
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
