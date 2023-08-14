import {
    View,
    StyleSheet,
    Text,
    ImageBackground,
} from "react-native";

export const Comment = ({ isOwn, avatar, text, date }) => {
    const containerStyle = {
        flexDirection: isOwn ? "row" : "row-reverse",
    };

    const imageStyle = {
        marginRight: isOwn ? 16 : 0,
        marginLeft: isOwn ? 0 : 16,
    };

    const textStyles = {
        textAlign: isOwn ? "left" : "right",
    };

    const containerTextStyles = {
        borderTopLeftRadius: isOwn ? 0 : 6,
        borderTopRightRadius: isOwn ? 6 : 0,
    };

    return (
        <View style={{ marginTop: 32 }}>
        <View style={[styles.container, containerStyle]}>
            <ImageBackground style={[styles.image, imageStyle]}></ImageBackground>
            <View style={[styles.containerText, containerTextStyles]}>
            <Text style={[styles.text, textStyles]}>{text}</Text>
            <Text style={[styles.date, textStyles]}>{date}</Text>
            </View>
        </View>
        </View>
    );
    };

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "flex-start",
    },
    image: {
        width: 28,
        height: 28,
        borderRadius: 20,
        backgroundColor: "#BDBDBD",
        opacity: 0.5,
    },
    containerText: {
        backgroundColor: "#F5F5F5",
        borderRadius: 6,
        padding: 16,
        marginBottom: 24,
        width: 200,
    },
    text: {
        color: "#212121",
        fontSize: 13,
        lineHeight: 18,
        fontWeight: 400,
        marginBottom: 8,
    },
    date: {
        color: "#BDBDBD",
        fontSize: 10,
        lineHeight: 12,
        fontWeight: 400,
    },
});