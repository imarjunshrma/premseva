import {ColorValue} from 'react-native';
import Snackbar from 'react-native-snackbar';

type ToastType = 'Success' | 'Failure' | 'Warning' | 'Alert';
class Toast {
  constructor() {}
  public static showToast = (message?: string, type: ToastType = 'Alert') => {
    if (message != null && message.length > 0) {
      Snackbar.show({
        text: message,
        backgroundColor: Toast.getColor(type),
        textColor: 'white',
        duration: 3000,
      });
    }
  };

  private static getColor = (
    type: 'Success' | 'Failure' | 'Warning' | 'Alert' = 'Alert',
  ) => {
    switch (type) {
      case 'Success':
        return 'green';
      case 'Failure':
        return 'red';
      case 'Warning':
        return 'yellow';
      default:
        return 'black';
    }
  };
}

export default Toast;
