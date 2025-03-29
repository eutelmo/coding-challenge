import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import * as Device from "expo-device";

const getLandscapeWidth = () => {
    const { width, height } = Dimensions.get("window");
    return Math.max(width, height);
};

const getLandscapeHeight = () => {
    const { width, height } = Dimensions.get("window");
    return Math.min(width, height);
};

const isTablet = Device.DeviceType.TABLET === Device.deviceType;

const WINDOW_DESIGN_SIZE_WIDTH = isTablet ? 1194 : 667;
const WINDOW_DESIGN_SIZE_HEIGHT = isTablet ? 834 : 375;

const scaleWidthSize = (size: number) => {
    return getLandscapeWidth() * (size / WINDOW_DESIGN_SIZE_WIDTH);
};

const scaleHeightSize = (size: number) => {
    return getLandscapeHeight() * (size / WINDOW_DESIGN_SIZE_HEIGHT);
};

export default {
    isTablet,
    scaleWidthSize,
    scaleHeightSize,
    WIDTH: getLandscapeWidth(),
    HEIGHT: getLandscapeHeight(),

    FONT_SIZE_12: scaleWidthSize(12),
    FONT_SIZE_14: scaleWidthSize(14),
    FONT_SIZE_16: scaleWidthSize(16),
    FONT_SIZE_18: scaleWidthSize(18),
    FONT_SIZE_20: scaleWidthSize(20),
    FONT_SIZE_21: scaleWidthSize(21),
    FONT_SIZE_24: scaleWidthSize(24),
    FONT_SIZE_32: scaleWidthSize(32),

    WIDTH_20: scaleWidthSize(20),
    HEIGHT_20: scaleHeightSize(20),

    WIDTH_40: scaleWidthSize(40),
    HEIGHT_40: scaleHeightSize(40),
};