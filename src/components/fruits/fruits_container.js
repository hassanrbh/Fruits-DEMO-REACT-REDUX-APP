import { connect } from "react-redux";
import fruits from "./fruits";
import { addFruit, removeFruit , clearFruits} from "../../features/fruits/fruits_slice";

const mapStateToProps = state => ({ // representation of th props that will be passed to the fruits component
    fruits: state.fruits.fruits,
});

const mapDispatchToProps = dispatch => ({
    addApple: () => dispatch(addFruit("apple")),
    addOrange: () => dispatch(addFruit("orange")),
    removeOrange: () => dispatch(removeFruit("orange")),
    removeApple: () => dispatch(removeFruit("apple")),
    clearFruits: () => dispatch(clearFruits()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(fruits);