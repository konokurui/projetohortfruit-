import Api from "../Api";

export async function buscarTodasFrutas(){
    try {
        const resultado = await Api.get(`/hortifruit`);
        return resultado.data;

    } catch (error) {

        console.log(error);
        return [];

    }
}

export async function pesquisarNomeFruta(nomeFruta){ 
    try{
        const resultado = await Api.get(`/hortifruit?fruta=${nomeFruta}`);
        return resultado.data 
    } catch (error) {
        console.log(error);
        return{};
    }
}


export async function salvarNovaFruta(idp,frutap,valorp,fotop){
    try{
        await Api.post(`/hortifruit`,{
        id: idp,
        fruta: frutap,
        valor: valorp,
        foto: fotop
        });
        return 'Sucesso';

    } catch (error) {
        console.log();
        return[];
    }
}

export async function alterarFrutas(idp,frutap,valorp,fotop){
    try{
        await Api.put(`/hortifruit/${idp}`,
        {
            id: idp,
            fruta: frutap,
            valor: valorp,
            foto: fotop
        });
        return 'Sucesso';
    }catch (error){
        console.log();
        return[];
    }
}

export async function deletarFrutas(idp){
    try{
        await Api.delete(`/hortifruit/${idp}`);
        return 'Sucesso'
    }catch (error){
        console.log(error);
        return 'error';
    }
}
