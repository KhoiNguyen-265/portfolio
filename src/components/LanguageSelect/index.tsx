import Avatar from "@mui/material/Avatar";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { enFlag, viFlag } from "../../assets/language";

type Lang = { code: string; label: string; flagSrc: string };

const languages: Lang[] = [
  { code: "vi", label: "Tiếng Việt", flagSrc: viFlag },
  { code: "en", label: "English", flagSrc: enFlag },
];

function LanguageSelect() {
  const { i18n } = useTranslation();
  const currentLanguage = (i18n.resolvedLanguage as "en" | "vi") || "en";

  useEffect(() => {
    document.documentElement.setAttribute("lang", currentLanguage);
  }, [currentLanguage]);

  const handleOnChange = (e: SelectChangeEvent<string>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <FormControl
      variant="outlined"
      size="small"
      sx={{
        minWidth: 150,

        /* viền mặc định */
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--color-border)",
          borderWidth: "1px",
          transition: "border-color .15s ease",
        },

        /* HOVER: target đúng element đang hover + tăng specificity bằng && */
        "&& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--color-text2)", // sáng hơn, nhìn rõ ở dark
          borderWidth: "1px",
        },

        /* FOCUS/ACTIVE: khi đang mở/đang focus */
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor: "var(--color-text1)",
            borderWidth: "1px",
          },

        /* icon màu giữ nguyên (chỉ cần border) */
        "& .MuiSvgIcon-root": {
          color: "var(--color-text2)",
          opacity: 0.8,
        },
      }}
    >
      <InputLabel
        id="lang-select-label"
        sx={{
          color: "var(--color-text2)",
          opacity: 0.7,
          "&.Mui-focused": { color: "var(--color-text1)" }, // label đổi màu khi focus
        }}
      >
        Language
      </InputLabel>

      <Select
        labelId="lang-select-label"
        id="lang-select"
        value={currentLanguage}
        label="Language"
        onChange={handleOnChange}
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: "var(--color-bg-body)",
              color: "var(--color-text2)",
              border: "1px solid var(--color-border)",
              borderRadius: "12px",
            },
          },
        }}
      >
        {languages.map((language) => (
          <MenuItem key={language.code} value={language.code}>
            <div className="text-text2/80 flex items-center gap-1">
              <Avatar
                alt=""
                variant="rounded"
                sx={{ width: 20, height: 14 }}
                src={language.flagSrc}
              />
              <span>{language.label}</span>
            </div>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default LanguageSelect;
