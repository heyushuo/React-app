//相当于数据管理系统
const defaultState = {
    data: ['react', 'Vue'],
    name: "何玉硕"
}
//reducer可以接收state,但是不可以修改state
export default (state = defaultState, action) => {
    console.log(action)
    if (action.type === "change-value") {
        var newState = state;
        newState.name = action.value

        return newState
    }
    return state;
}