export interface Voo {
    id: number;
    destino: aeroporto;
	partida: aeroporto;
	usuarios: usuario[];
	
	custo_adulto: number;
	custo_meia: number;
	data_hora_de_ida_partida: String; 
	data_hora_de_chegada_partida: String;
	data_hora_de_ida_volta: String;
	data_hora_de_chegada_volta: String;
}
