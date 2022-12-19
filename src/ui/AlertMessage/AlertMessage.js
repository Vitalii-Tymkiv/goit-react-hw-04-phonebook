import { Notify } from 'notiflix';

const notifyOptions = {
  position: 'center-top',
  fontSize: '16px',
  clickToClose: true,
  width: '450px',
  timeout: 4000,
};

export function showAlertMessage(value) {
  Notify.warning(`${value} is already in contacts.`, notifyOptions);
}
