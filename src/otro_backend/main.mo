import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
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
	//Funcion para crear
	public shared func crearUsario(usuario : Usuario, id : Id) : async Usuario {
		listaUsuario.put(id, usuario);
		Debug.print("Nuevo usuario creado con el id " #id);
		return usuario;
	};
	//Funcion para
	public query func consultarUsuario(id : Id) : async ?Usuario {
		return listaUsuario.get(id);
	};

};
