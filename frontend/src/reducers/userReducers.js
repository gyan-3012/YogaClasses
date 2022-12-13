import {
  USER_ADMISSION_DETAILS_FAIL,
  USER_ADMISSION_DETAILS_REQUEST,
  USER_ADMISSION_DETAILS_SUCCESS,
  USER_ADMISSION_FAIL,
  USER_ADMISSION_REQUEST,
  USER_ADMISSION_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_PAYMENT_FAIL,
  USER_PAYMENT_REQUEST,
  USER_PAYMENT_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_RESET,
  USER_UPDATE_PROFILE_SUCCESS,
} from '../constants/userConstants'

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true }
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true }
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true }
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload }
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    case USER_DETAILS_RESET:
      return { user: {} }
    default:
      return state
  }
}

export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return { loading: true }
    case USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload }
    case USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload }
    case USER_UPDATE_PROFILE_RESET:
      return {}
    default:
      return state
  }
}

export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true }
    case USER_LIST_SUCCESS:
      return { loading: false, users: action.payload }
    case USER_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userAdmissionReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_ADMISSION_REQUEST:
      return { loading: true }
    case USER_ADMISSION_SUCCESS:
      return { loading: false, success: true, admissionInfo: action.payload }
    case USER_ADMISSION_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userPaymentReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PAYMENT_REQUEST:
      return { loading: true }
    case USER_PAYMENT_SUCCESS:
      return { loading: false, success: true, paymentInfo: action.payload }
    case USER_PAYMENT_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userAdmissionDetailsReducer = (
  state = { admissions: [] },
  action
) => {
  switch (action.type) {
    case USER_ADMISSION_DETAILS_REQUEST:
      return { loading: true, admissions: [] }
    case USER_ADMISSION_DETAILS_SUCCESS:
      return { loading: false, admissions: action.payload }
    case USER_ADMISSION_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
