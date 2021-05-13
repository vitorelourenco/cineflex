export default function askToGoHome(e){
  return window.confirm("Deseja voltar para a pagina inicial?") 
    ? null 
    : e.preventDefault();
}
