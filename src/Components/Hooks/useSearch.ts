import { useDispatch, useSelector } from "react-redux";
import { setTerm } from "../../Store/slices/createSlice";
import { RootState } from "../../Store";


const useSearch = () => {
    const dispatch = useDispatch();
    const term = useSelector((state: RootState) => state.search.term);

    const updateSearchTerm = (term: string) => {
        dispatch(setTerm(term));
    };

    return {
        term,
        updateSearchTerm,
    };
};

export default useSearch;
