import { ScrollView, View, Text } from "react-native";
import { systemBlue, systemGreen, label, secondaryLabel, systemBackground } from "@bacons/apple-colors";

const newsItems = [
  {
    category: "MacBook Air (Early 2026)",
    description: "Updated MacBook Air with M5 chip in 13-inch and 15-inch sizes. Design remains the same with no other major changes."
  },
  {
    category: "MacBook Pro (Early 2026)",
    description: "14-inch and 16-inch MacBook Pro refresh with M5 Pro and M5 Max chips, no major design changes."
  },
  {
    category: "Low-Cost MacBook",
    description: "New budget MacBook cheaper than Air, around 13 inches with A18 Pro chip. Expected price: $699-$899."
  },
  {
    category: "OLED MacBook Pro (Late 2026)",
    description: "Revamped touchscreen OLED MacBook Pro with 2nm M6 chip and hole-punch camera without notch."
  },
  {
    category: "iMac",
    description: "M5 chip refresh for 24-inch iMac, plus possible M5 Max iMac variant in testing."
  },
  {
    category: "Mac mini & Mac Studio (Mid-2026)",
    description: "M5 and M5 Pro Mac mini versions, plus M5 Mac Studio with M5 Max and new M5 Ultra chip options."
  },
  {
    category: "Studio Display 2",
    description: "New Studio Display with 120Hz ProMotion, HDR, A19 chip, and improved Center Stage camera."
  }
];

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: systemBackground }}
      contentInsetAdjustmentBehavior="automatic"
    >
      <View style={{ padding: 20, gap: 16 }}>
        <View style={{ gap: 8, marginBottom: 8 }}>
          <Text style={{ fontSize: 32, fontWeight: "bold", color: label }}>
            Latest Apple Mac News
          </Text>
          <Text style={{ fontSize: 16, color: secondaryLabel }}>
            What's coming in 2026
          </Text>
        </View>

        {newsItems.map((item, index) => (
          <View
            key={index}
            style={{
              backgroundColor: systemBackground,
              padding: 16,
              borderRadius: 12,
              borderCurve: "continuous",
              gap: 8,
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "600", color: systemBlue }}>
              {item.category}
            </Text>
            <Text style={{ fontSize: 15, color: label, lineHeight: 22 }}>
              {item.description}
            </Text>
          </View>
        ))}

        <View style={{ marginTop: 8, padding: 16, gap: 8 }}>
          <Text style={{ fontSize: 14, fontWeight: "600", color: label }}>
            Sources:
          </Text>
          <Text style={{ fontSize: 13, color: secondaryLabel, lineHeight: 20 }}>
            • MacRumors - Upcoming Apple Products Guide{"\n"}
            • MacRumors - Four MacBooks in 2026{"\n"}
            • 9to5Mac - New Products Early 2026{"\n"}
            • Cult of Mac - 15 New Products in 2026
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
