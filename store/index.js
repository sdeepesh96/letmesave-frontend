import cookie from "cookie";

export const state = () => ({
  id: null,
  userData: null,
  userEmail: null,
  userPassword: null,
  storeName: null,
  profileAddress: null,
  profilePostcode: null,
  profileReferral: null,
  profileFullname: null,
  profileEmail: null,
  profileNumber: null,
  profileAltnumber: null,
  profileWebsite: null,
  profileRegion: null,
  profileCountry: null,
  profileCity: null,
  profileDesignation: null,
  profileDescription: null
});

export const mutations = {
  SET_USER_DATA(state, userObj) {
    state.userData = userObj;
  },
  SET_USER_EMAIL(state, email) {
    state.userEmail = email;
  },
  SET_USER_PASSWORD(state, password) {
    state.userPassword = password;
  },
  SET_PROFILE_STORE_NAME(state, storename) {
    state.storeName = storename;
  },
  SET_PROFILE_ADDRESS(state, profileaddress) {
    state.profileAddress = profileaddress;
  },
  SET_PROFILE_POSTAL_CODE(state, profilepostcode) {
    state.profilePostcode = profilepostcode;
  },
  SET_PROFILE_REFERRAL_CODE(state, profilereferral) {
    state.profileReferral = profilereferral;
  },
  SET_PROFILE_FULL_NAME(state, profilefullname) {
    state.profileFullname = profilefullname;
  },
  SET_PROFILE_EMAIL(state, profileemail) {
    state.profileEmail = profileemail;
  },
  SET_PROFILE_NUMBER(state, profilenumber) {
    state.profileNumber = profilenumber;
  },
  SET_PROFILE_ALTERNUMBER(state, profilealtnumber) {
    state.profileAltnumber = profilealtnumber;
  },
  SET_PROFILE_WEBSITE(state, profilewebsite) {
    state.profileWebsite = profilewebsite;
  },
  SET_PROFILE_REGION(state, profileregion) {
    state.profileRegion = profileregion;
  },
  SET_PROFILE_COUNTRY(state, profilecountry) {
    state.profileCountry = profilecountry;
  },
  SET_PROFILE_CITY(state, profilecity) {
    state.profileCity = profilecity;
  },
  SET_PROFILE_DESIGNATION(state, profiledesignation) {
    state.profileDesignation = profiledesignation;
  },
  SET_PROFILE_DESCRIPTION(state, profiledescription) {
    state.profileDescription = profiledescription;
  }
};

export const getters = {
  userData(state) {
    return state.userData;
  },
  userEmail(state) {
    return state.userEmail;
  },
  userPassword(state) {
    return state.userPassword;
  },
  storeName(state) {
    return state.storeName;
  },
  profileAddress(state) {
    return state.profileAddress;
  },
  profilePostcode(state) {
    return state.profilePostcode;
  },
  profileReferral(state) {
    return state.profileReferral;
  },
  profileFullname(state) {
    return state.profileFullname;
  },
  profileEmail(state) {
    return state.profileEmail;
  },
  profileNumber(state) {
    return state.profileNumber;
  },
  profileAltnumber(state) {
    return state.profileAltnumber;
  },
  profileWebsite(state) {
    return state.profileWebsite;
  },
  profileRegion(state) {
    return state.profileRegion;
  },
  profileCountry(state) {
    return state.profileCountry;
  },
  profileCity(state) {
    return state.profileCity;
  },
  profileDesignation(state) {
    return state.profileDesignation;
  },
  profileDescription(state) {
    return state.profileDescription;
  }
};

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (!req.headers.cookie) {
      return;
    }
    const cookiesObj = cookie.parse(req.headers.cookie);
    const { id, userID, userAccessToken, userName } = cookiesObj;
    const userData = { id, userID, userAccessToken, userName };

    if (userData) {
      commit("SET_USER_DATA", userData);
    }
  }
};
