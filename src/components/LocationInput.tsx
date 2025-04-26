/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useState } from "react";
import Geonames from "geonames.js";
import { Select, MenuItem } from "@mui/material";

const geonames = new (Geonames as any)({
  username: "thalesandrade",
  lan: "en",
  encoding: "JSON",
});

interface IProps {
  geoId?: string;
  isCountry: boolean;
  onChange: (value: string) => void;
  className?: string;
}

export const GeoLocation = ({ geoId, onChange, isCountry }: IProps) => {
  const [options, setOptions] = useState<
    [{ geonameId: string; countryName?: string; name?: string }] | []
  >([]);
  const [currentItem, setCurrentItem] = useState("");

  useEffect(() => {
    try {
      const data = async () => {
        isCountry
          ? geonames.countryInfo({}).then((res: any) => {
              setOptions(res.geonames);
            })
          : geonames.children({ geonameId: geoId }).then((res: any) => {
              if (res.totalResultsCount) setOptions(res.geonames);
            });
      };
      data();
    } catch (err) {
      console.error(err);
    }
  }, [geoId, isCountry]);

  const handleChange = (e: any) => {
    setCurrentItem(e.target.value as string);
    onChange(e.target.value as string);
  };

  return (
    <Select
      value={currentItem}
      onChange={handleChange}
      sx={{
        borderRadius: "30px",
        height: "38px",
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
          outline: "1px solid var(--color-gray-300)",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          outline: "1px solid var(--color-yellow-500)",
        },
      }}
      MenuProps={{
        PaperProps: {
          sx: {
            maxHeight: 180,
            maxWidth: 190,
          },
        },
      }}
    >
      {options.map(
        (value, index) =>
          value && (
            <MenuItem key={index} value={value.geonameId}>
              {isCountry ? value.countryName : value.name}
            </MenuItem>
          )
      )}
    </Select>
  );
};
