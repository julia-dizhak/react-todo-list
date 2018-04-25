export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products
});

export const fetchProductsError = error => ({
  type: FETCH_PRODUCTS_ERROR,
  payload: { error }
});

export function fetchProducts() {
    return dispatch => {
      dispatch(fetchProductsBegin());
      return fetch('https://documents-de4ba.firebaseio.com/documents.json')
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchProductsSuccess(json));
          return json;
        })
        .catch(error => dispatch(fetchProductsError(error)));
    };
}
  
// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}