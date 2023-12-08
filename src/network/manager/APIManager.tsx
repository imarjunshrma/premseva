import SharedPreference, {
  SharedPreferenceKeys,
} from '../../storage/SharedPreference';
import config from '../config/config';

type Method = 'GET' | 'POST' | 'DELETE' | 'PUT';

interface Props {
  endPoint: string;
  method?: Method;
  header?: Record<string, string>;
  body?: Record<string, any>;
}

const defaultHeaders: Record<string, any> = {
  'content-type': 'application/json',
};

export const makeRequest = async ({
  endPoint,
  method = 'GET',
  header = {},
  body,
}: Props) => {
  try {
    const url = config.baseURL + endPoint;
    const headers = {...defaultHeaders, ...header};
    const token = await SharedPreference.shared.getItem(
      SharedPreferenceKeys.token,
    );

    if (token != null) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    console.log('*********************************');
    console.log(`URL: ${url}`);
    console.log('Headers: ', headers);
    console.log('Method: ', method);
    console.log('Body: ', body);
    console.log('*********************************');
    const bodyString =
      Object.keys(body ?? {}).length > 0 ? JSON.stringify(body) : '';
    const response = await fetch(url, {
      method: method,
      headers: headers,
      body: bodyString,
      // body: body != null ? JSON.stringify(body) : null,
    });
    console.log(`StatusCode: ${response.status}`);
    const json = await response.json();
    if (!response.ok) {
      const errors = json.errors;
      const errorMsg = errors[Object.keys(errors)[0]][0];
      throw new Error(errorMsg);
    }
    //console.log('Response: ', response);
    return json;
  } catch (error) {
    console.log('API Error: ', error);
    throw error;
  }
};
