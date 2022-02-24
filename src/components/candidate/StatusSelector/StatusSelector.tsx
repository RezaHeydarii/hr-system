import { Button, Icon } from "@components/atoms";
import { Menu, MenuItem } from "@mui/material";
import { statusPairs, statusEnum } from "@utils/enumHelpers";
import React from "react";
import cls from "classnames";

interface Props {
  value?: CandidateStatus;
  isLoading?: boolean;
  onChangeStatus?: (newStatus: CandidateStatus) => void;
  className?: string;
}

export const StatusSelector = (props: Props) => {
  const { value, isLoading, onChangeStatus, className } = props;
  const valueProps = statusEnum.get(value || "Initial");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (st: CandidateStatus) => {
    setAnchorEl(null);
    if (onChangeStatus) onChangeStatus(st);
  };
  return (
    <div className={className}>
      <Button
        className={cls(
          valueProps?.bgClassName,
          "rounded-xl flex items-center justify-between"
        )}
        variant="text"
        onClick={handleClick}
        fullWidth
        isLoading={isLoading}
        freeHeight
      >
        <p className={cls(valueProps?.textClassName, "flex-1 mr-4")}>
          {valueProps?.name}
        </p>
        <div
          className={cls(
            valueProps?.textClassName,
            " border-l border-l-text-light px-2 h-full flex justify-center items-center"
          )}
        >
          <Icon name="chevron_down" />
        </div>
      </Button>
      <Menu
        classes={{ list: "!p-0" }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {statusPairs.map((status) => {
          const [s, prop] = status;
          return (
            <MenuItem onClick={() => handleClose(s)}>
              <p>{prop.name}</p>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};
