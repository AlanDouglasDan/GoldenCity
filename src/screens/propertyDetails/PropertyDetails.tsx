import React, { FC } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { AuthStackNavParams } from "navigation/auth-stack/AuthStackNav";
import { Button } from "components/Button";
import { common, layout, spacing } from "core/styles";
import styles from "./PropertyDetails.styles";

const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };

const PropertyDetails: FC<
  NativeStackScreenProps<AuthStackNavParams, "Property Details">
> = ({ navigation, route }) => {
  const id = route.params.id ?? "";

  const property = {
    id,
    title: "Modern Villa with Pool",
    price: {
      usd: 850000,
      eth: 425,
    },
    location: "Beverly Hills, CA",
    type: "villa",
    roi: "7.2%",
    metrics: {
      totalInvestors: 142,
      funded: "89%",
      minInvestment: "$10",
      monthlyIncome: "$520",
      appreciation: "4.5%",
      rentalYield: "5.8%",
      totalReturn: "10.3%",
    },
    status: "Active Investment",
    description:
      "This stunning modern villa offers luxurious living spaces with high-end finishes throughout. The property has been tokenized for fractional ownership, allowing investors to participate in this premium real estate opportunity with as little as $10.",
    features: [
      "Swimming Pool",
      "Smart Home System",
      "Gourmet Kitchen",
      "Home Theater",
      "Wine Cellar",
      "Outdoor Kitchen",
      "Fire Pit",
      "Three-Car Garage",
    ],
    tokenDetails: {
      totalTokens: 85000,
      availableTokens: 9350,
      tokenPrice: "$10",
      tokenSymbol: "VILLA425",
      contractAddress: "0x1234...5678",
      blockchain: "Ethereum",
    },
    financials: {
      grossRent: "$8,500/month",
      netRent: "$7,225/month",
      expenses: {
        management: "8%",
        maintenance: "5%",
        insurance: "2%",
        property_tax: "1.2%",
      },
      projectedAppreciation: "4.5% annually",
    },
    yearBuilt: 2020,
    parkingSpaces: 3,
    lotSize: "0.5 acres",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    ],
    agent: {
      name: "John Doe",
      phone: "+1 (555) 123-4567",
      email: "john@realestate.com",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    },
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={[layout.flexedRow, styles.gap, { padding: 20 }]}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
        />

        <Text style={styles.title}>Details</Text>
      </View>

      <ScrollView style={styles.contentContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingVertical: 12 }}
        >
          {property.images.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image }}
              resizeMode="cover"
              style={styles.buildingImage}
            />
          ))}
        </ScrollView>

        <View style={[styles.card, spacing.marginTop24]}>
          {/* Property Details */}
          <Text style={styles.sectionTitle}>Property Details</Text>
          <Text style={styles.description}>{property.description}</Text>

          <View style={styles.grid}>
            <View style={styles.iconRow}>
              {/* Example: Parking Spaces */}
              <Feather name="truck" size={18} color="#2563EB" />
              <Text>{property.parkingSpaces} Parking</Text>
            </View>
            <View style={styles.iconRow}>
              <Feather name="maximize-2" size={18} color="#2563EB" />
              <Text>{property.lotSize}</Text>
            </View>
            <View style={styles.iconRow}>
              <Feather name="calendar" size={18} color="#2563EB" />
              <Text>Built {property.yearBuilt}</Text>
            </View>
            <View style={styles.iconRow}>
              <Feather name="users" size={18} color="#2563EB" />
              <Text>{property.metrics.totalInvestors} Investors</Text>
            </View>
          </View>

          {/* Features */}
          <Text style={styles.subTitle}>Features</Text>
          <View style={styles.featuresGrid}>
            {property.features.map((feature, index) => (
              <View key={index} style={styles.iconRow}>
                <Feather name="home" size={18} color="#2563EB" />
                <Text>{feature}</Text>
              </View>
            ))}
          </View>

          {/* Token Information */}
          <Text style={styles.subTitle}>Token Information</Text>
          <View style={styles.tokenBox}>
            <View style={styles.tokenGrid}>
              <View>
                <Text style={styles.label}>Token Symbol</Text>
                <Text style={styles.bold}>
                  {property.tokenDetails.tokenSymbol}
                </Text>
              </View>
              <View>
                <Text style={styles.label}>Token Price</Text>
                <Text style={styles.bold}>
                  {property.tokenDetails.tokenPrice}
                </Text>
              </View>
              <View>
                <Text style={styles.label}>Available Tokens</Text>
                <Text style={styles.bold}>
                  {property.tokenDetails.availableTokens.toLocaleString()}
                </Text>
              </View>
              <View>
                <Text style={styles.label}>Total Supply</Text>
                <Text style={styles.bold}>
                  {property.tokenDetails.totalTokens.toLocaleString()}
                </Text>
              </View>
              <View style={styles.fullRow}>
                <Text style={styles.label}>Smart Contract</Text>
                <Text style={styles.mono}>
                  {property.tokenDetails.contractAddress}
                </Text>
              </View>
            </View>
          </View>

          {/* Financial Overview */}
          <Text style={styles.subTitle}>Financial Overview</Text>
          <View>
            {/* Rental Income */}
            <View style={styles.financialBox}>
              <Text style={styles.financialTitle}>Rental Income</Text>
              <View style={styles.rowBetween}>
                <Text style={styles.label}>Gross Rent</Text>
                <Text style={styles.medium}>
                  {property.financials.grossRent}
                </Text>
              </View>
              <View style={styles.rowBetween}>
                <Text style={styles.label}>Net Rent</Text>
                <Text style={styles.medium}>{property.financials.netRent}</Text>
              </View>
            </View>

            {/* Expenses */}
            <View style={styles.financialBox}>
              <Text style={styles.financialTitle}>Expenses</Text>
              {Object.entries(property.financials.expenses).map(
                ([key, value]) => (
                  <View key={key} style={styles.rowBetween}>
                    <Text style={styles.label}>
                      {key.replace("_", " ").charAt(0).toUpperCase() +
                        key.slice(1)}
                    </Text>
                    <Text style={styles.medium}>{value}</Text>
                  </View>
                )
              )}
            </View>
          </View>
        </View>

        <View>
          {/* Investment Card */}
          <View
            style={[styles.card, spacing.marginTop24, spacing.marginBottom20]}
          >
            <View style={styles.rowBetween2}>
              <View>
                <Text style={styles.label}>Investment Price</Text>
                <View style={styles.row}>
                  <Feather name="dollar-sign" size={16} color="#2563EB" />
                  <Text style={styles.price}>
                    ${property.price.usd.toLocaleString()}
                  </Text>
                </View>

                <View style={styles.row}>
                  <FontAwesome5
                    name="ethereum"
                    size={18}
                    color="#2563EB"
                    // style={{ marginRight: 4 }}
                  />

                  <Text style={styles.eth}> {property.price.eth} ETH</Text>
                </View>
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <Text style={styles.label}>Annual ROI</Text>
                <View style={styles.row}>
                  <Feather name="trending-up" size={16} color="green" />
                  <Text style={styles.roi}>{property.roi}</Text>
                </View>
              </View>
            </View>

            {/* Investment Metrics */}
            <View style={styles.metrics}>
              {[
                ["Rental Yield", property.metrics.rentalYield],
                ["Appreciation", property.metrics.appreciation],
                ["Total Return", property.metrics.totalReturn, "green"],
              ].map(([label, value, color]) => (
                <View key={label} style={styles.rowBetween2}>
                  <Text style={styles.textSecondary}>{label}</Text>
                  <Text style={[styles.fontMedium, color && { color }]}>
                    {value}
                  </Text>
                </View>
              ))}
            </View>

            {/* Funding Progress */}
            <View style={{ marginBottom: 16 }}>
              <View style={styles.rowBetween2}>
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
              <Text style={styles.minInvestment}>
                Min Investment: {property.metrics.minInvestment}
              </Text>
            </View>

            {/* Buttons */}
            <View style={styles.gap}>
              <Button
                title="View 3D version"
                prefixIcon={<Feather name="grid" size={16} color="#fff" />}
                onPress={() => navigation.navigate("ThreeDView")}
              />

              <Button
                title="Connect Wallet to Invest"
                prefixIcon={
                  <FontAwesome5 name="wallet" size={16} color="#fff" />
                }
                onPress={() => {}}
              />
            </View>

            {/* Social Icons */}
            <View style={styles.socialRow}>
              <FontAwesome5 name="facebook" size={28} color="#1877F2" />
              <FontAwesome5 name="twitter" size={28} color="#1DA1F2" />
              <FontAwesome5 name="linkedin" size={28} color="#0077B5" />
            </View>
          </View>

          {/* Agent Card */}
          <View style={[styles.card, spacing.marginBottom20]}>
            <View style={styles.agentRow}>
              <Image
                source={{ uri: property.agent.image }}
                style={styles.agentImage}
              />
              <View>
                <Text style={styles.agentName}>{property.agent.name}</Text>
                <Text style={styles.agentTitle}>Investment Advisor</Text>
              </View>
            </View>
            <View>
              <Text style={styles.contactText}>
                <Text style={styles.fontMedium}>Phone: </Text>
                {property.agent.phone}
              </Text>
              <Text style={styles.contactText}>
                <Text style={styles.fontMedium}>Email: </Text>
                {property.agent.email}
              </Text>
            </View>

            <Button
              title="Schedule Consultation"
              style={spacing.marginTop20}
              opaque={false}
              onPress={() => {}}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PropertyDetails;
