import React, { Component } from "react";
import PhoneBook from "./components/Phonebook/Phonebook";
import { CSSTransition } from "react-transition-group";
import style from "./components/Phonebook/PhoneBook.module.css";
import TitleSlideTransition from "./stylesTransition/TitleSlideTransition.module.css";
import ContactsOperations from "./components/redux/ContactsOperatins/ContactsOperation";
import ContactSelector from "./components/redux/Selectors/ContactSelectors";
import { connect } from "react-redux";
class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }
  render() {
    return (
      <div className={style.Wrapper}>
        <CSSTransition
          in
          appear
          timeout={1000}
          classNames={TitleSlideTransition}
          unmountOnExit
        >
          <h1 className={style.title}>Phonebook</h1>
        </CSSTransition>
        <PhoneBook />
      </div>
    );
  }
}
const MapStateToProps = (state) => ({
  contacts: ContactSelector.visibleContacts(state),
});
const MapDispatchToProps = {
  onFetchContacts: ContactsOperations.fetchContacts,
};
export default connect(MapStateToProps, MapDispatchToProps)(App);
