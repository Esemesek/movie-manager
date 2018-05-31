import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addComment } from '../../actions/commentAddActions';
import GridWrapper from '../../components/GridWrapper';
import WithLoading from '../../components/WithLoading';
import Table from '../../components/Table';
import InputBar from '../../components/InputBar';
import { fetchComments } from '../../actions/commentActions';

class MovieDetailsComments extends Component {
  componentDidMount() {
    this.props.getComments(this.props.match.params.id);
  }

  getRows() {
    return this.props.comment.data.map(e => [e.comment]);
  }

  addComment = (comment) => {
    this.props.addComment(
      this.props.match.params.id,
      comment,
    );
  }

  render() {
    return (
      <WithLoading size={100} isLoading={this.props.comment.fetching}>
        <GridWrapper title="Comments" xs={12} sm={6}>
          <Table rows={this.getRows()} />
          <InputBar
            label="Add comment"
            onClick={this.addComment}
            disabled={this.props.addStatus.fetching}
          />
        </GridWrapper>
      </WithLoading>
    );
  }
}

const mapStateToProps = state => ({
  addStatus: state.comment.add,
  comment: state.comment.list,
});

const mapDispatchToProps = dispatch => ({
  addComment: (id, comment) => dispatch(addComment(id, comment)),
  getComments: id => dispatch(fetchComments(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieDetailsComments));
