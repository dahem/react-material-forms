import React from 'react';
import {
  ListItemText,
  MenuItem,
  Paper,
  TextField,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import Downshift from 'downshift';

const menuPaperStyle = {
  position: 'absolute',
  zIndex: 11,
  marginTop: 5,
  left: 0,
  right: 0,
};

function AutocompleteInput(props) {
  const { margin } = props;
  const renderSuggestion = ({
    suggestion,
    itemProps,
    highlightedIndex,
    index,
  }) => (
    <MenuItem
      {...itemProps}
      key={suggestion.id}
      selected={highlightedIndex === index}
      component="div"
    >
      <ListItemText
        primary={(
          <span style={{ paddingRight: 8 }}>
            {props.primaryInfo(suggestion)}
          </span>
        )}
        secondary={props.secondaryInfo ? props.secondaryInfo(suggestion) : null}
      />
    </MenuItem>
  );

  const renderInput = ({ getInputProps }) => {
    const textField = (
      <TextField
        {...getInputProps({
          ...props.input,
          value: props.value,
          onChange: props.onChange,
        })}
        variant="outlined"
        fullWidth
        margin={margin}
      />
    );

    return textField;
  };

  return (
    <Downshift
      onChange={props.onSelectSugestion}
      itemToString={(item) => {
        if (item) return props.itemToString(item);
        return '';
      }}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        highlightedIndex,
        isOpen,
      }) => (
        <div style={{ position: 'relative' }}>
          {renderInput({ getInputProps })}
          <div {...getMenuProps()}>
            {isOpen && props.suggestions.length > 0 && (
              <Paper style={{ ...menuPaperStyle }} square>
                {props.suggestions.map((suggestion, index) => renderSuggestion({
                  suggestion,
                  itemProps: getItemProps({ item: suggestion, key: suggestion.id }),
                  index,
                  highlightedIndex,
                }))}
              </Paper>
            )}
          </div>
        </div>
      )}
    </Downshift>
  );
}

AutocompleteInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSelectSugestion: PropTypes.func.isRequired,
  itemToString: PropTypes.func.isRequired,
  startAdornment: PropTypes.node,
  suggestions: PropTypes.array,
  primaryInfo: PropTypes.func.isRequired,
  secondaryInfo: PropTypes.func,
  label: PropTypes.string,
  suggestion: PropTypes.object,
};

export default AutocompleteInput;
