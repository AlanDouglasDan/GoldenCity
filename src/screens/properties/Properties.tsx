import React, { FC, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { AuthStackNavParams } from "navigation/auth-stack/AuthStackNav";
import { Button } from "components/Button";
import styles from "./Properties.styles";
import { layout } from "@src/core/styles";

const Properties: FC<
  NativeStackScreenProps<AuthStackNavParams, "Properties">
> = ({ navigation }) => {
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const [filters, setFilters] = useState({
    priceRange: "all",
    propertyType: "all",
    location: "",
    minROI: "",
    maxROI: "",
    fundingStatus: "all",
    sortBy: "newest",
  });

  const properties = [
    {
      id: 1,
      title: "Modern Villa with Pool",
      price: {
        usd: 850000,
        eth: 425,
      },
      location: "Beverly Hills, CA",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      type: "villa",
      roi: "7.2%",
      metrics: {
        totalInvestors: 142,
        funded: "89%",
        minInvestment: "$10",
        monthlyIncome: "$520",
        appreciation: "4.5%",
      },
      status: "Active Investment",
      features: ["Pool", "Smart Home", "Solar Panels"],
      tokenDetails: {
        totalTokens: 85000,
        availableTokens: 9350,
        tokenPrice: "$10",
      },
    },
    {
      id: 2,
      title: "Luxury Penthouse",
      price: {
        usd: 1200000,
        eth: 600,
      },
      location: "Manhattan, NY",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      type: "apartment",
      roi: "6.8%",
      metrics: {
        totalInvestors: 203,
        funded: "95%",
        minInvestment: "$10",
        monthlyIncome: "$680",
        appreciation: "5.2%",
      },
      status: "Almost Funded",
      features: ["Doorman", "Gym", "Terrace"],
      tokenDetails: {
        totalTokens: 120000,
        availableTokens: 6000,
        tokenPrice: "$10",
      },
    },
    {
      id: 3,
      title: "Waterfront Estate",
      price: {
        usd: 2100000,
        eth: 1050,
      },
      location: "Miami Beach, FL",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      type: "house",
      roi: "7.5%",
      metrics: {
        totalInvestors: 89,
        funded: "45%",
        minInvestment: "$10",
        monthlyIncome: "$1200",
        appreciation: "6.1%",
      },
      status: "New Listing",
      features: ["Waterfront", "Dock", "Wine Cellar"],
      tokenDetails: {
        totalTokens: 210000,
        availableTokens: 115500,
        tokenPrice: "$10",
      },
    },
  ];

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredProperties = properties.filter((property) => {
    if (
      filters.propertyType !== "all" &&
      property.type !== filters.propertyType
    )
      return false;
    if (
      filters.location &&
      !property.location.toLowerCase().includes(filters.location.toLowerCase())
    )
      return false;
    if (filters.minROI && parseFloat(property.roi) < parseFloat(filters.minROI))
      return false;
    if (filters.maxROI && parseFloat(property.roi) > parseFloat(filters.maxROI))
      return false;

    if (filters.priceRange !== "all") {
      const [min, max] = filters.priceRange.split("-").map(Number);
      if (max && (property.price.usd < min || property.price.usd > max))
        return false;
      if (!max && property.price.usd < min) return false;
    }

    if (filters.fundingStatus !== "all") {
      const fundedPercentage = parseInt(property.metrics.funded);
      switch (filters.fundingStatus) {
        case "new":
          if (fundedPercentage > 30) return false;
          break;
        case "active":
          if (fundedPercentage < 30 || fundedPercentage >= 90) return false;
          break;
        case "almostFunded":
          if (fundedPercentage < 90) return false;
          break;
        default:
          break;
      }
    }

    return true;
  });

  // Sort properties based on selected criteria
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch (filters.sortBy) {
      case "priceAsc":
        return a.price.usd - b.price.usd;
      case "priceDesc":
        return b.price.usd - a.price.usd;
      case "roiDesc":
        return parseFloat(b.roi) - parseFloat(a.roi);
      case "fundingDesc":
        return parseInt(b.metrics.funded) - parseInt(a.metrics.funded);
      default:
        return 0;
    }
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={[layout.spacedRow, { padding: 24 }]}>
        <Text style={styles.title}>Investment Properties</Text>

        <TouchableOpacity onPress={() => setShowFilters(!showFilters)}>
          <Feather name="filter" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.contentContainer}>
        {showFilters && (
          <View style={styles.container}>
            <ScrollView
              horizontal={false}
              contentContainerStyle={styles.filtersGrid}
              showsVerticalScrollIndicator={false}
            >
              {/* Price Range */}
              <View style={styles.filterItem}>
                <Text style={styles.label2}>Price Range</Text>
                <Picker
                  mode="dropdown"
                  selectedValue={filters.priceRange}
                  onValueChange={(value) =>
                    handleFilterChange("priceRange", value)
                  }
                  style={styles.picker}
                >
                  <Picker.Item label="All Prices" value="all" />
                  <Picker.Item label="Under $500,000" value="0-500000" />
                  <Picker.Item
                    label="$500,000 - $1,000,000"
                    value="500000-1000000"
                  />
                  <Picker.Item label="Over $1,000,000" value="1000000" />
                </Picker>
              </View>

              {/* Property Type */}
              <View style={styles.filterItem}>
                <Text style={styles.label2}>Property Type</Text>
                <Picker
                  selectedValue={filters.propertyType}
                  onValueChange={(value) =>
                    handleFilterChange("propertyType", value)
                  }
                  style={styles.picker}
                >
                  <Picker.Item label="All Types" value="all" />
                  <Picker.Item label="House" value="house" />
                  <Picker.Item label="Apartment" value="apartment" />
                  <Picker.Item label="Villa" value="villa" />
                </Picker>
              </View>

              {/* Location */}
              <View style={styles.filterItem}>
                <Text style={styles.label2}>Location</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter location"
                  value={filters.location}
                  onChangeText={(value) =>
                    handleFilterChange("location", value)
                  }
                />
              </View>

              {/* Minimum ROI */}
              <View style={styles.filterItem}>
                <Text style={styles.label2}>Minimum ROI</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Min ROI %"
                  value={filters.minROI}
                  keyboardType="numeric"
                  onChangeText={(value) => handleFilterChange("minROI", value)}
                />
              </View>

              {/* Funding Status */}
              <View style={styles.filterItem}>
                <Text style={styles.label2}>Funding Status</Text>
                <Picker
                  selectedValue={filters.fundingStatus}
                  onValueChange={(value) =>
                    handleFilterChange("fundingStatus", value)
                  }
                  style={styles.picker}
                >
                  <Picker.Item label="All Statuses" value="all" />
                  <Picker.Item label="New Listings" value="new" />
                  <Picker.Item label="Active Funding" value="active" />
                  <Picker.Item label="Almost Funded" value="almostFunded" />
                </Picker>
              </View>

              {/* Sort By */}
              <View style={styles.filterItem}>
                <Text style={styles.label2}>Sort By</Text>
                <Picker
                  selectedValue={filters.sortBy}
                  onValueChange={(value) => handleFilterChange("sortBy", value)}
                  style={styles.picker}
                >
                  <Picker.Item label="Newest First" value="newest" />
                  <Picker.Item label="Price: Low to High" value="priceAsc" />
                  <Picker.Item label="Price: High to Low" value="priceDesc" />
                  <Picker.Item label="Highest ROI" value="roiDesc" />
                  <Picker.Item label="Most Funded" value="fundingDesc" />
                </Picker>
              </View>
            </ScrollView>
          </View>
        )}

        <View>
          {sortedProperties.map((property) => (
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
                <View style={{ marginVertical: 8 }}>
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
                <View style={{ marginBottom: 8 }}>
                  <View style={styles.rowBetween}>
                    <Text style={styles.textSecondary}>Funding Progress</Text>
                    <Text style={styles.fontMedium}>
                      {property.metrics.funded}
                    </Text>
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
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    navigation.navigate("Property Details", { id: property.id })
                  }
                >
                  <Text style={styles.buttonText}>Invest Now</Text>
                  <Feather
                    name="arrow-right"
                    color="#fff"
                    style={{ marginLeft: 8 }}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Properties;
