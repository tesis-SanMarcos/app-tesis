const environments = {
    stg: {
      REACT_NATIVE_PRODUCTS: 'https://localhost:5000/'
    },
    prd: {
      REACT_NATIVE_PRODUCTS: 'https://next/'
    }
  };
  
  const currentEnvironment = 'stg';
  const ENV = environments[currentEnvironment];
  
  export default ENV;