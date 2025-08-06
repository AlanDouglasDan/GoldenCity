import React, { FC, useState } from "react";
import {
  TextInput,
  View,
  ViewStyle,
  Text,
  TouchableOpacity,
  TextStyle,
  ImageStyle,
  KeyboardTypeOptions,
  Keyboard,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CheckBox } from "@rneui/themed";

import { BottomSheet } from "components/BottomSheet";
import { palette, common } from "core/styles";
import { noop } from "core/utils";
import styles from "./SelectInput.styles";

interface OptionValue {
  label: string;
  value: { name: string; id: any };
}

interface SelectInputProps {
  label?: string;
  value: string;
  options: OptionValue[];
  onSelect: (selectedValue: any) => void;
  onChangeText?: (text: string) => void;
  containerStyle?: ViewStyle;
  placeholder?: string;
  error?: string;
  selectorHeight?: number;
  labelStyle?: TextStyle;
  selectIconContainerStyle?: ViewStyle;
  inputContainerStyle?: ViewStyle;
  inputStyle?: ViewStyle | TextStyle | ViewStyle[] | TextStyle[];
  iconStyle?: ImageStyle;
  showPlaceholder?: boolean;
  keyboardType?: KeyboardTypeOptions;
  editable?: boolean;
  onBlur?: () => void;
  formatValue?: (value: string) => string;
  valueRef?: "name" | "id";
}

const SelectInput: FC<SelectInputProps> = ({
  label,
  value,
  options,
  onChangeText,
  onSelect,
  containerStyle = {},
  placeholder,
  error,
  selectorHeight,
  labelStyle = {},
  selectIconContainerStyle = {},
  inputContainerStyle = {},
  inputStyle = {},
  iconStyle = {},
  showPlaceholder = true,
  keyboardType,
  editable = false,
  onBlur = noop,
  formatValue,
  valueRef = "id",
}) => {
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);

  const onOpen = () => {
    Keyboard.dismiss();
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <View style={containerStyle}>
        {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}

        <TouchableOpacity
          style={[styles.inputContainer, inputContainerStyle]}
          onPress={onOpen}
        >
          <TextInput
            placeholder={showPlaceholder ? placeholder : undefined}
            // placeholderTextColor={palette.MID_GRAY}
            style={[
              styles.input,
              inputStyle,
              common.shadow,
              focused || value ? styles.inputFocus : null,
            ]}
            value={(() => {
              const selected = options.find(
                (option) => option.value.id === value
              );
              return selected ? selected.value.name : "";
            })()}
            editable={editable}
            pointerEvents={editable ? "auto" : "none"}
            keyboardType={keyboardType}
            onChangeText={(text) => onChangeText && onChangeText(text)}
            onFocus={() => setFocused(true)}
            onBlur={() => {
              if (!value) {
                setFocused(false);
              }
              onBlur();
              Keyboard.dismiss();
            }}
            returnKeyLabel="Done"
            returnKeyType="done"
            onSubmitEditing={Keyboard.dismiss}
          />

          <View style={[styles.iconContainer, selectIconContainerStyle]}>
            <Feather
              name="chevron-down"
              size={22}
              color={palette.GREY}
              style={[styles.icon, iconStyle]}
            />
          </View>
        </TouchableOpacity>

        {!!error && <Text style={styles.textError}>{error}</Text>}
      </View>

      <BottomSheet
        open={open}
        onClose={() => setOpen(false)}
        height={selectorHeight}
        HeaderComponent={
          <>
            <View style={styles.header} />

            <View style={styles.paddedBackground}>
              <Text style={styles.bottomSheetTitle}>
                {placeholder || label}
              </Text>

              <TouchableOpacity
                style={styles.closeBtn}
                onPress={() => setOpen(false)}
              >
                <AntDesign name="close" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </>
        }
      >
        <View style={styles.content}>
          {options.map((option) => (
            <CheckBox
              key={option.value.id}
              // @ts-ignore
              title={option.label}
              checked={
                valueRef === "id"
                  ? option.value.id === value
                  : option.value.name === value
              }
              onPress={() => {
                if (
                  valueRef === "id"
                    ? option.value.id === value
                    : option.value.name === value
                ) {
                  onSelect("");
                } else {
                  onSelect(option.value);
                }
                setOpen(false);
              }}
              containerStyle={styles.optionContainer}
              textStyle={styles.optionLabel}
              uncheckedIcon={
                <Ionicons name="radio-button-off" size={24} color={"#2563EB"} />
              }
              checkedIcon={
                <Ionicons name="radio-button-on" size={24} color={"#2563EB"} />
              }
            />
          ))}
        </View>
      </BottomSheet>
    </>
  );
};

export default SelectInput;
