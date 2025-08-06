import React, { FC } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Button } from "components/Button";
import styles from "./PropertyCard.styles";

interface PropertyCardProps {
  property: any;
  navigation: any;
}

const PropertyCard: FC<PropertyCardProps> = ({ property, navigation }) => {
  return (
    <TouchableOpacity
      key={property.id}
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate("Property Details", { id: property.id })
      }
      style={styles.card}
    >
      {/* Image + Status Badge */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: property.image }}
          style={styles.image}
          resizeMode="cover"
        />

        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>{property.status}</Text>
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title2}>{property.title}</Text>
        <Text style={styles.location}>{property.location}</Text>

        {/* Price and ROI */}
        <View style={styles.rowBetween}>
          <View>
            <Text style={styles.label}>Investment Price</Text>
            <View style={styles.row}>
              <Feather name="dollar-sign" size={16} color="#2563EB" />

              <Text style={styles.boldText}>
                {" "}
                ${property.price.usd.toLocaleString()}
              </Text>
            </View>

            <View style={styles.row}>
              <FontAwesome5
                name="ethereum"
                size={18}
                color="#2563EB"
                style={{ marginRight: 4 }}
              />

              <Text style={[styles.textPrimary]}>
                {" "}
                {property.price.eth} ETH
              </Text>
            </View>
          </View>

          <View style={{ alignItems: "flex-end" }}>
            <Text style={styles.label}>Annual ROI</Text>
            <View style={styles.row}>
              <Feather name="trending-up" size={16} color="green" />

              <Text style={[styles.boldText, { color: "green" }]}>
                {" "}
                {property.roi}
              </Text>
            </View>
          </View>
        </View>

        {/* Investment Metrics */}
        <View style={{ marginVertical: 16 }}>
          {[
            ["Monthly Income", property.metrics.monthlyIncome],
            ["Appreciation", property.metrics.appreciation],
            ["Min Investment", property.metrics.minInvestment],
          ].map(([label, value]) => (
            <View style={styles.rowBetween} key={label}>
              <Text style={styles.textSecondary}>{label}</Text>
              <Text style={styles.fontMedium}>{value}</Text>
            </View>
          ))}
        </View>

        {/* Funding Progress */}
        <View style={{ marginBottom: 16 }}>
          <View style={styles.rowBetween}>
            <Text style={styles.textSecondary}>Funding Progress</Text>
            <Text style={styles.fontMedium}>{property.metrics.funded}</Text>
          </View>
          <View style={styles.progressBarBackground}>
            <View
              style={[
                styles.progressBarFill,
                // @ts-ignore
                { width: property.metrics.funded },
              ]}
            />
          </View>
        </View>

        {/* Token Details */}
        <View style={styles.tokenContainer}>
          <View style={styles.rowBetween}>
            <Text style={styles.textSecondary}>Available Tokens</Text>
            <Text style={styles.fontMedium}>
              {property.tokenDetails.availableTokens.toLocaleString()} /{" "}
              {property.tokenDetails.totalTokens.toLocaleString()}
            </Text>
          </View>
          <View style={styles.rowBetween}>
            <Text style={styles.textSecondary}>Token Price</Text>
            <Text style={styles.fontMedium}>
              {property.tokenDetails.tokenPrice}
            </Text>
          </View>
        </View>

        {/* Button */}
        <Button
          title="Invest Now"
          suffixIcon={<Feather name="arrow-right" color="#fff" size={16} />}
          onPress={() =>
            navigation.navigate("Property Details", {
              id: property.id,
            })
          }
        />
      </View>
    </TouchableOpacity>
  );
};

export default PropertyCard;
