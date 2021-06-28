import type from "../types";
import { Alert } from 'react-native';

export function storeListData(data) {
    return {
        type: type.STORE_LIST,
        data,
    };
};

export function storeList() {
    return (dispatch) => {
        // fetch('http://spotpopfashion.com/api/products/get_terms.php?action=store', {
            fetch('https://spflaunchpad.com/affiliate/api/products/35', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then(res => {
                ('res', res)
                if (res.status === true || res.status === "true") {
                    dispatch(storeListData(res));
                }
                else {
                    dispatch(storeListData(res));
                    // Alert.alert(res.message);
                }
            })
            .catch((e) => {
                // dispatch(appListRes(e));
                (e);
            });
    }
};
