import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Platform} from 'react-native';
import {err} from 'react-native-svg/lib/typescript/xml';

const WEB_CLIENT_ID_IOS =
  '117938608303-nh4bd134tl7tdse6osfv8gp5crr833g1.apps.googleusercontent.com';
const WEB_CLIENT_ID_ANDROID =
  '117938608303-nh4bd134tl7tdse6osfv8gp5crr833g1.apps.googleusercontent.com';
const REVERSED_CLIENT_ID =
  'com.googleusercontent.apps.117938608303-nh4bd134tl7tdse6osfv8gp5crr833g1';

export class SocialLogin {
  static configure = () => {
    GoogleSignin.configure({
      webClientId:
        Platform.OS == 'android' ? WEB_CLIENT_ID_ANDROID : WEB_CLIENT_ID_IOS,
    });
  };

  static loginWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const result = await auth().signInWithCredential(googleCredential);
      return result;
    } catch (error) {
      throw error;
    }
  };

  static firebaseSignOut = async () => {
    try {
      await removeLoggedInUser();
      const currentUser = await GoogleSignin.getCurrentUser();
      if (currentUser != null) {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
      }
      if (auth().currentUser != null) {
        await auth().signOut();
      }
    } catch (error) {
      throw error;
    }
  };
}
