import MenuComponent from '../components/MenuComponent';
import { mount_tool } from '../actions/active-tool-actions';
import { search_tools } from '../actions/tool-list-actions';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

const mapStateToProps = state => {
    return {
        active_tool: state.active_tool,
        tool_list: state.tool_list
    }
};

const mapDispatchToProps = dispatch => {
    return {
        select_tool: tool => dispatch(mount_tool(tool)),
        search_tools: event => dispatch(search_tools(event.target.value.trim()))
    }
};

const Menu = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withHandlers({
        on_submit: ({ tool_list, select_tool }) => event => {
            event.preventDefault();
            if (tool_list.length) {
                select_tool(tool_list[0][3])
            }
        }
    })
)(MenuComponent);

export default Menu;