export const getInputChange = (value) => ({
    type: '',
    value
})


export const getInitData = () => {
    //可以接收dispatch
    return (dispatch) => {
        this.axios.get('/list.data', {
                params: this.data
            })
            .then(function (res) {
                const data = res / data;
                const action = getInputChange(data);
                dispatch(action)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}