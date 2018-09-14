const defaultState = {
    data: ['react', 'Vue'],
    name: "何玉硕"
}
export const reducerName = (state = defaultState, action) => {
    switch (action.type) {
        case 'ACTION_TYPE':
            return
        default:
            return state
    }
}



// <Provider store={store}>
//     <App />
// </Provider>


// const mapStateToProps = () => {
//     return {

//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {

//     }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(组件名字)