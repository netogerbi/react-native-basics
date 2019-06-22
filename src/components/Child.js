//esta forma também se mostrou rápido
export default props => {
    if (props.test) {
        return props.children; // retorna todas as tags dentro do elemento <Child>
    } else {
        return null;
    }
}