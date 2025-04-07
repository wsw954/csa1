"use client";

import { useDispatch, useSelector } from "react-redux";
import {
  selectMake,
  selectModel,
  fetchModelData,
  updateOptions,
  popupConfirm,
  popupCancel,
} from "@/features/vehicle/vehicleSlice";
import makeModelData from "@/oemData/makeModelData";

import FormSection from "@/components/vehicle/form/FormSection";
import FormField from "@/components/vehicle/form/FormField";
import Dropdown from "@/components/vehicle/form/Dropdown";
import CheckBoxGroup from "@/components/vehicle/form/CheckBoxGroup";
import Popup from "@/components/vehicle/form/Popup";

export default function VehicleBuilderForm() {
  const dispatch = useDispatch();
  const {
    selectedMake,
    models,
    selectedModel,
    optionsAvailable,
    optionsSelected,
    popup,
  } = useSelector((state) => state.vehicle);

  const makeOptions = makeModelData.map((item) => ({
    id: item.id,
    name: item.name,
  }));

  // Handlers
  const handleMakeChange = (selection) => {
    dispatch(selectMake(selection.id));
  };

  const handleModelChange = (selection) => {
    dispatch(selectModel(selection.id));
    if (selectedMake && selection.id) {
      dispatch(fetchModelData({ make: selectedMake, model: selection.id }));
    }
  };

  const handleOptionChange = (category, selection) => {
    if (selectedMake && selectedModel) {
      dispatch(
        updateOptions({
          make: selectedMake,
          model: selectedModel,
          category,
          selection,
        })
      );
    }
  };

  const handlePopupConfirm = (e) => {
    e.preventDefault();
    dispatch(popupConfirm({ make: selectedMake, model: selectedModel }));
  };

  const handlePopupCancel = (e) => {
    e.preventDefault();
    dispatch(popupCancel());
  };

  const renderOptionFields = () => {
    if (!selectedModel || !optionsAvailable) return null;

    return Object.entries(optionsAvailable).map(([category, option]) => {
      const selectedChoices =
        optionsSelected?.[category]?.choices?.map((c) => c.id) || [];

      return (
        <FormField key={category} label={option.displayName} htmlFor={category}>
          {option.type === "Dropdown" ? (
            <Dropdown
              id={category}
              value={selectedChoices[0] || ""}
              options={option.choices}
              onChange={(e, selection) =>
                handleOptionChange(category, selection)
              }
            />
          ) : option.type === "CheckBoxGroup" ? (
            <CheckBoxGroup
              id={category}
              choices={option.choices.map((choice) => ({
                ...choice,
                checked: selectedChoices.includes(choice.id),
              }))}
              onChange={(e, selection) =>
                handleOptionChange(category, selection)
              }
            />
          ) : null}
        </FormField>
      );
    });
  };

  return (
    <main className="p-6 max-w-4xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold text-gray-800">Build a Vehicle</h1>

      {/* Section 1: Make & Model */}
      <FormSection
        title="Select Vehicle"
        description="Start by selecting a Make and Model."
      >
        <FormField label="Make" htmlFor="make" required>
          <Dropdown
            id="make"
            value={selectedMake}
            options={makeOptions}
            onChange={(e, selection) => handleMakeChange(selection)}
          />
        </FormField>

        <FormField label="Model" htmlFor="model" required>
          <Dropdown
            id="model"
            value={selectedModel}
            options={models}
            onChange={(e, selection) => handleModelChange(selection)}
            disabled={!selectedMake}
          />
        </FormField>
      </FormSection>

      {/* Section 2: Dynamic Option Fields */}
      {selectedModel && (
        <FormSection title="Available Options">
          {renderOptionFields()}
        </FormSection>
      )}

      {/* Optional Popup */}
      {popup?.show && (
        <Popup
          message={popup.message}
          confirmAction={handlePopupConfirm}
          cancelAction={handlePopupCancel}
        />
      )}
    </main>
  );
}
