const enviroments = [
    stg = {
        REACT_NATIVE_PRODUCTS : 'https:localhost:5000/'
    },
    prd = {
        REACT_NATIVE_PRODUCTS : 'https:next/'
    }
]
const currenEnviroment = stg
const ENV = enviroments[currenEnviroment] 
export default ENV