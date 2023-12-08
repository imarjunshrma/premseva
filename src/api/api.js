import axios from 'axios';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContextProvider';
import {API_ROUTE} from '../network/config/config';
// import {useNavigate} from 'react-router-dom';

function useRestAPI() {
  const {currentUser} = useContext(AuthContext);
  //   const navigate = useNavigate();
  const getCareGiver = () => {
    return axios
      .post(API_ROUTE + '/api/user/getCareGiver', {
        id: currentUser?.id,
      })
      .then(res => {
        return res.data;
      })
      .catch(err => {
        return err;
      });
  };
  const addCareGiver = ({values}) => {
    return axios
      .post(API_ROUTE + '/api/user/addCareGiver', {
        id: currentUser?.id,
        cg_name: values.name,
        cg_age: values.age,
        cg_gender: values.gender,
        cg_relationship: values.relationship,
      })
      .then(async res => {
        if (res.data.status) {
          let isCareReceiver = await axios.post(
            API_ROUTE + '/api/user/getCareReceiver',
            {
              id: currentUser?.id,
            },
          );
          if (!isCareReceiver?.data?.status) {
            // navigate('/profile/receiver');
          }
          return isCareReceiver?.data?.status;
        } else {
          alert(res.data.error);
          return false;
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getCareReceiver = async () => {
    return axios
      .post(API_ROUTE + '/api/user/getCareReceiver', {
        id: currentUser?.id,
      })
      .then(res => {
        if (res.data.status) {
          return res.data;
        } else {
          return false;
        }
      })
      .catch(err => {
        return err;
      });
  };
  const addCareReceiver = ({values}) => {
    return axios
      .post(API_ROUTE + '/api/user/addCareReceiver', {
        id: currentUser?.id,
        cr_name: values.name,
        cr_nicname: values.displayName,
        cr_age: values.age,
        cr_gender: values.gender,
        cr_allergies: values.allergies,
        cr_favFood: values.favoriteFood,
        cr_favTV: values.tvProgram,
        cr_hobbies: values.hobbies,
        cr_hearing: values.aids ? values.aids : false,
        cr_spectacles: values.spectacles ? values.spectacles : false,
        cr_diagnoses: values.diagnoses,
        cr_ProfileDate: '03/07/1963',
        cr_ProfileCreator: values.displayName,
        cr_relationship: values.relationship,
        image: values?.image,
      })
      .then(async res => {
        console.log(res?.data);
        if (res?.data?.status) {
          let isCareReceiver = await axios.post(
            API_ROUTE + '/api/user/getCareReceiver',
            {
              id: currentUser?.id,
            },
          );
          console.log(res);
          if (isCareReceiver?.data?.status) {
            // navigate('/profile/receiver');
            return true;
          } else {
            return false;
          }
        } else {
          alert(res.data.error);
          return false;
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  const getCategories = categoryId => {
    return axios
      .post(API_ROUTE + '/api/user/getArticles', {
        categoryId: categoryId,
      })
      .then(res => {
        if (res.data.status) {
          return res.data;
        } else {
          console.log(res.data.error);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  const getArticle = articleId => {
    return axios
      .post(API_ROUTE + '/api/user/getArticle', {
        articleId: articleId,
        userId: currentUser?.id,
      })
      .then(res => {
        if (res.data.status) {
          return res.data;
        } else {
          console.log(res.data.error);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  const getVideos = categoryId => {
    return axios
      .post(API_ROUTE + '/api/user/getVideos', {
        categoryId: categoryId,
        userId: currentUser?.id,
      })
      .then(res => {
        if (res.data.status) {
          return res.data;
        } else {
          console.log(res.data.error);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  const addVideoBookmark = videoId => {
    return axios
      .post(API_ROUTE + '/api/user/addVideoBookmark', {
        videoId: videoId,
        userId: currentUser?.id,
      })
      .then(res => {
        if (res.data.status) {
          return res.data;
        } else {
          console.log(res.data.error);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  const deleteVideoBookmark = videoId => {
    return axios
      .post(API_ROUTE + '/api/user/deleteVideoBookmark', {
        videoId: videoId,
        userId: currentUser?.id,
      })
      .then(res => {
        if (res.data.status) {
          return res.data;
        } else {
          console.log(res.data.error);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  const getBookmarks = categoryId => {
    return axios
      .post(API_ROUTE + '/api/user/getBookmarks', {
        userId: currentUser?.id,
        categoryId: categoryId,
      })
      .then(res => {
        if (res.data.status) {
          return res.data;
        } else {
          console.log(res.data.error);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  const getVideoBookmarks = categoryId => {
    return axios
      .post(API_ROUTE + '/api/user/getVideoBookmarks', {
        userId: currentUser?.id,
        categoryId: categoryId,
      })
      .then(res => {
        if (res.data.status) {
          return res.data;
        } else {
          console.log(res.data.error);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const deleteBookmark = articleId => {
    return axios
      .post(API_ROUTE + '/api/user/deleteBookmark', {
        userId: currentUser?.id,
        articleId: articleId,
      })
      .then(res => {
        if (res.data.status) {
          return res.data;
        } else {
          console.log(res.data.error);
          return res.data;
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const addBookmark = articleId => {
    return axios
      .post(API_ROUTE + '/api/user/addBookmark', {
        userId: currentUser?.id,
        articleId: articleId,
      })
      .then(res => {
        if (res.data.status) {
          return res.data;
        } else {
          console.log(res.data.error);
          return res.data;
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const carePlanQuestions = value => {
    return axios
      .post(API_ROUTE + '/api/user/carePlan', {
        id: currentUser?.id,
        ...value,
      })
      .then(res => {
        if (res.data.status) {
          console.log(res.data);
          return res.data;
        } else {
          alert(res.data.error);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  const getCarePlanQuestions = async () => {
    return axios
      .post(API_ROUTE + '/api/user/getCarePlan', {
        id: currentUser?.id,
      })
      .then(res => {
        if (res.data.status) {
          return res.data.answer;
        } else {
          console.log(res.data.error);
          return res.data;
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const sendForgetApi = async email => {
    return axios
      .post(API_ROUTE + '/api/user/sendForgetApi', {
        email: email,
      })
      .then(res => {
        if (res.data.status) {
          alert('OTP sent successfully');
          return true;
        } else {
          return false;
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  const verifyPassword = async values => {
    return axios
      .post(API_ROUTE + '/api/user/updatePassword', {
        email: values.email,
        password: values.password,
        otp: values.otp,
      })
      .then(res => {
        if (res.data.status) {
          alert('Password updated successfully');
          //   navigate('/auth/login');
          return res.data;
        } else {
          console.log(res.data.error);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const sendPrintMail = () => {
    return axios
      .post(API_ROUTE + '/api/user/printCarePlan', {
        userId: currentUser?.id,
      })
      .then(res => {
        if (res.data.status) {
          alert('Mail sent successfully');
          return res.data;
        } else {
          console.log(res.data.error);
          alert('Something went wrong!');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const uploadImage = async formData => {
    return axios
      .post(API_ROUTE + '/api/user/imageUpload', formData)
      .then(res => {
        if (res.data.status) {
          return res.data;
        } else {
          console.log(res.data.error);
          return res.data;
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const feedbackForm = values => {
    return axios
      .post(API_ROUTE + '/api/user/addFeedback', {
        ...values,
      })
      .then(res => {
        if (res.data.status) {
          alert('Form sent successfully');
          return res.data;
        } else {
          alert(res.data.error);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  return {
    getCareGiver,
    addCareGiver,
    getCareReceiver,
    getCategories,
    getArticle,
    getBookmarks,
    deleteBookmark,
    addBookmark,
    addCareReceiver,
    carePlanQuestions,
    getCarePlanQuestions,
    getVideos,
    deleteVideoBookmark,
    addVideoBookmark,
    getVideoBookmarks,
    verifyPassword,
    sendForgetApi,
    uploadImage,
    sendPrintMail,
    feedbackForm,
  };
}

export default useRestAPI;
