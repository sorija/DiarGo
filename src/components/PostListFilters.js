import React from 'react';
import { connect } from 'react-redux';
import { SingleDatePicker } from 'react-dates';
import { setTextFilter, setDateFilter } from '../actions/filters';

export class PostListFilters extends React.Component {
  state = {
    calendarFocused: false
  };
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  onDateChange = (createdAt) => {
    this.setState(() => ({ createdAt }));
    this.props.setDateFilter(createdAt);
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  render() {
    return (

      <div className="page-header">
      <div className="content-container">
        <div className="input-group search-inputs">
          <div className="input-group__item">
            <input
              className="text-input"
              type="text"
              placeholder="Search title"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group__item">
            <SingleDatePicker
              date={this.props.filters.date}
              onDateChange={this.onDateChange}
              focused={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              placeholder={'Search date'}
              numberOfMonths={1}
              showClearDate={true}
              showDefaultInputIcon={true}
              isOutsideRange={() => false}
            />
          </div>
        </div>
      </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  setDateFilter: (date) => dispatch(setDateFilter(date))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostListFilters);
