"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_bounceable_1 = tslib_1.__importDefault(require("@freakycoder/react-native-bounceable"));
/**
 * ? Local Imports
 */
const RNPollItem_style_1 = tslib_1.__importStar(require("./RNPollItem.style"));
const RNPoll_utils_1 = require("../utils/RNPoll.utils");
const defaultCheckMarkImage = require("../local-assets/checkmark.png");
const { Colors } = require("../../../../../src/theme/colors");
const RNPollItem = ({ id, text, onPress, disabled, percentage, hasBeenVoted, votedChoiceByID, choiceTextStyle, percentageTextStyle, checkMarkImageStyle, borderColor = "#AABEE3", fillBackgroundColor = Colors.skyBlue, checkMarkIconImageSource = defaultCheckMarkImage, ImageComponent = react_native_1.Image, PollItemContainer = react_native_1.View, ...rest }) => {
    const { width } = RNPoll_utils_1.calculateProgressBarAnimation({
        percentage,
        hasBeenVoted,
    });
    let _borderWidth = 0.5;
    const isChoiceSelected = votedChoiceByID === id;
    if (hasBeenVoted) {
        _borderWidth = isChoiceSelected ? 0.5 : 0.1;
    }
    return (<react_native_bounceable_1.default bounceEffect={0.97} onPress={onPress} disabled={disabled}>
      <react_native_1.View style={RNPollItem_style_1._container(borderColor, _borderWidth)}>
        <react_native_1.Animated.View style={[
        react_native_1.StyleSheet.absoluteFill,
        RNPollItem_style_1._animatedViewStyle(fillBackgroundColor, width),
    ]}/>
        <react_native_1.Text style={[RNPollItem_style_1.default.choiceTextStyle, choiceTextStyle]}>{text}</react_native_1.Text>
        {hasBeenVoted && (<PollItemContainer style={RNPollItem_style_1.default.pollItemContainer} {...rest}>
            {isChoiceSelected && (<ImageComponent source={checkMarkIconImageSource} style={[RNPollItem_style_1.default.checkMarkImageStyle, checkMarkImageStyle]}/>)}
            <react_native_1.Text style={[RNPollItem_style_1.default.percentageTextStyle, percentageTextStyle]}>
              {RNPoll_utils_1.convertPercentageString(percentage)}
            </react_native_1.Text>
          </PollItemContainer>)}
      </react_native_1.View>
    </react_native_bounceable_1.default>);
};
exports.default = RNPollItem;
//# sourceMappingURL=RNPollItem.js.map