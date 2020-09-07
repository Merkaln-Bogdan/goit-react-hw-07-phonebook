import TaskPhoneBook from "../TaskPhonebook";
import Axios from "axios";
// Axios.defaults.baseRL = "http://localhost:2000";
const addContacts = (name, number) => (dispatch) => {
  dispatch(TaskPhoneBook.addContactsRequest());
  Axios.post("http://localhost:2000/contacts", { name, number })
    .then((response) =>
      dispatch(TaskPhoneBook.addContactsSuccess(response.data))
    )
    .catch((error) => dispatch(TaskPhoneBook.addContactsError()));
};
const fetchContacts = () => (dispatch) => {
  dispatch(TaskPhoneBook.fetchContactsRequest());
  Axios.get("http://localhost:2000/contacts")
    .then((response) =>
      dispatch(TaskPhoneBook.fetchContactsSuccess(response.data))
    )
    .catch((error) => dispatch(TaskPhoneBook.fetchContactsError()));
};
const removeContact = (id) => (dispatch) => {
  dispatch(TaskPhoneBook.removeContactsRequest());
  Axios.delete(`http://localhost:2000/contacts/${id}`)
    .then(() => dispatch(TaskPhoneBook.removeContactsSuccess(id)))
    .catch((error) => dispatch(TaskPhoneBook.removeContactsError()));
};
export default { addContacts, fetchContacts, removeContact };
