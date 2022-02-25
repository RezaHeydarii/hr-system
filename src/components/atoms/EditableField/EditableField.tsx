import React from "react";
import { Button, Icon } from "..";
interface Props<T = string> {
  className?: string;
  value?: T;
  onSaveChange?: (value: T) => void;
  defaultValue?: T;
  renderValue?: (value?: T) => React.ReactNode;
  renderEditInput?: (
    localValue: T,
    setter: (val: T) => void
  ) => React.ReactNode;
  label?: string;
}

export function EditableField<ValueType = string>(props: Props<ValueType>) {
  const {
    className,
    value,
    onSaveChange,
    defaultValue,
    renderValue,
    renderEditInput,
    label,
  } = props;

  const [innerValue, setInnerValue] =
    React.useState<ValueType | undefined>(defaultValue);
  const [onEditMode, toggleEditMode] = React.useState<boolean>(false);

  const enableEdit = () => {
    toggleEditMode(true);
  };
  const closeEdit = () => {
    toggleEditMode(false);
    setInnerValue(value);
  };

  const _onSaveValue = (value?: ValueType) => {
    if (onSaveChange && value) {
      onSaveChange(value);
      toggleEditMode(false);
    }
  };

  const renderNormal = () => {
    return (
      <div className={"flex items-center"}>
        {renderValue ? renderValue(innerValue) : <p>{innerValue}</p>}
        <Button
          noPadding
          variant="text"
          freeHeight
          className="ml-2.5"
          onClick={enableEdit}
        >
          <div className="bg-greys-6 w-6 h-6 rounded-full flex items-center justify-center text-xs text-greys-4">
            <Icon name="edit" />
          </div>
        </Button>
      </div>
    );
  };
  const renderEditMode = () => {
    return (
      <div className="flex items-center">
        {typeof innerValue === "string" && !renderEditInput && (
          <input
            value={innerValue}
            onChange={(e) => setInnerValue(e.target.value as any)}
            className="underline min-w-[18px]"
            style={{ width: `${(innerValue?.length || 1) * 11}px` }}
          />
        )}
        {renderEditInput && renderEditInput(innerValue!, setInnerValue)}
        <Button
          noPadding
          variant="text"
          freeHeight
          className="ml-2.5"
          onClick={closeEdit}
        >
          <div className="bg-greys-6 w-6 h-6 rounded-full flex items-center justify-center text-xs text-text-dark">
            <Icon name="close" />
          </div>
        </Button>
        <Button
          noPadding
          variant="text"
          freeHeight
          className="ml-1"
          onClick={_onSaveValue}
        >
          <Icon name="check_circle" className="text-text-dark text-xl" />
        </Button>
      </div>
    );
  };

  React.useEffect(() => {
    if (value) setInnerValue(value);
  }, [value]);

  return (
    <div className={className}>
      {label && <span className="text-sm mb-2.5 font-bold">{label}</span>}
      {!onEditMode ? renderNormal() : renderEditMode()}
    </div>
  );
}
