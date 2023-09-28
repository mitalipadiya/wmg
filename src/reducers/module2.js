import { GET_MODULE2, UPDATE_INDUSTRIAL_HEAT_PUMP, UPDATE_BASELINE, UPDATE_BIOMASS, UPDATE_ECONOMIC_PARAMETERS, UPDATE_ENERGY_MANAGEMENT_SYSTEM, UPDATE_LED, UPDATE_PASSIVE_INFRARED_SENSOR, UPDATE_SMART_METERS_ELECTRICITY, UPDATE_SMART_METERS_GAS, UPDATE_SOLAR_PV, UPDATE_SOLAR_PV_BESS, UPDATE_SOLAR_THERMAL, UPDATE_TECHNOLOGIES, UPDATE_VOLTAGE_OPTIMISATION, UPDATE_WIND, UPDATE_EMISSION_SAVINGS, UPDATE_MACC, UPDATE_PARETO_OPTIMISATION, UPDATE_CHP, UPDATE_NAVIGATION } from "../actions/types";
import userService from "../services/user.service";

const initialState = {
    navigation: [],
    baseline: {
        averageAnnualElectricityConsumption: "10000",
        averageAnnualGasConsumption: "140000",
        emissionFactorGridElectricity: "0.284",
        emissionFactorForGridGas: "0.18",
        annualOperationalEmissionsForGridElectricity: "",
        annualOperationalEmissionsForGridGas: "",
        totalBaselineEmissions: "",
        location: "Coventry",
        country: "United Kingdom",
        latitudeLongitude: "52.4081812,-1.510477",
        isComplete: false
    },
    technologies: {
        solarPV: false,
        wind: false,
        solarPvBess: false,
        biomass: false,
        chp: false,
        led: false,
        passiveInfraredSensor: false,
        smartMetersElectricity: false,
        smartMetersGas: false,
        voltageOptimisation: false,
        energyManagementSystem: false,
        solarThermal: false,
        industrialHeatPump: false,
        isComplete: false
    },
    economicParameters: {
        unitPriceOfElectricity: "0.248",
        unitPriceOfGas: "0.0603",
        yearsOfAbatement: "10",
        discountRate: "5",
        annualOperationalCostOfElectricity: "",
        annualOperationalCostOfHeat: "",
        isComplete: false
    },
    solarPV: {
        averageAnnualElectricityRequirements: "",
        percentAnnualElectricityFromPV: "80",
        location: "",
        latitudeLongitude: "",
        electricityGeneratedPVSystem: "",
        annualElectricityGenerationSelectedLocation: "",
        annualSolarInsolationSelectedLocation: "",
        solarModuleEfficiency: "15",
        gHGEmissionsElectricityPVSystem: "",
        annualOperationalEmissionSavings: "",
        totalOperationalEmissionSavingsAbatementPeriod: "",
        unitInstallationCostPVSystem: "",
        initialInvestmentPVSystem: "",
        annualElectricityInsteadOfGrid: "",
        sizeOfPVSystem: "",
        areaOfPVSystem: "",
        annualOperationalCostSavings: "",
        netPresentValueOperationalEnergy: "",
        totalOperationalEmissionSavingsAbatementPeriodInTon: "",
        costEffectivenessOperationalEmission: "",
        isComplete: false,
        isSelected: false
    },
    wind: {
        averageAnnualElectricityRequirements: "",
        percentAnnualElectricityFromWind: "15",
        location: "",
        latitudeLongitude: "",
        height: "80",
        turbineModel: "Gamesa G128 4500",
        averageAnnualWindSpeed: "",
        annualGenerationWindSystem: "",
        inverterEfficiency: "90",
        sizeOfWindSystem: "",
        electricityUsedFromWindSystemInsteadGrid: "",
        unitInstallationCost: "1300",
        initialInvestmentWindSystem: "",
        annualOperationalCost: "",
        netPresentValueOperationalEnergyCostSavings: "",
        annualOperationalEmissionSavings: "",
        totalOperationalEmissionSavingsAbatementPeriod: "",
        totalOperationalEmissionSavingsAbatementPeriodTon: "",
        costEffectivenessConsideringOperationalEmissionSavings: "",
        isComplete: false,
        isSelected: false
    },
    solarPvBess: {
        averageAnnualElectricityRequirements: "",
        percentAnnualElectricityFromPVBESS: "80",
        numberOfDaysOfOperationInAYear: "300",
        location: "",
        latitudeLongitude: "",
        dailyElectricityRequirementUsingPVBESSSystem: "",
        dailyAverageElectricityGeneration: "",
        averageDailySolarInsolation: "",
        solarModuleEfficiency: "15",
        batteryEfficiency: "90",
        depthOfDischargeOfBattery: "80",
        numberOfDaysOfAutonomy: "0",
        sizeOfPVSystem: "",
        areaOfPVSystem: "",
        batterySize: "",
        unitInstallationCostPVSystem: "",
        initialInvestmentPVSystem: "",
        unitPriceOfLithiumIonBatteryPack: "118",
        initialInvestmentForBESSSystem: "",
        annualElectricityUsedFromPVBESSSystemInsteadOfGrid: "",
        annualOperationalCostSavings: "",
        netPresentValueOfOperationalEnergyCostSavings: "",
        gHGEmissionsElectricityPVSystem: "",
        annualOperationalEmissionSavings: "",
        totalOperationalEmissionSavingsAbatementPeriod: "",
        totalOperationalEmissionSavingsAbatementPeriodTon: "",
        costEffectivenessConsideringOperationalEmissionSavingsOnly: "",
        isComplete: false,
        isSelected: false
    },
    biomass: {
        averageAnnualGasRequirements: "",
        annualHeatYouWantToGetFromBiomass: "80",
        whichLoadsAreToBeSupplied: "Process heat",
        biomassBoilerStrategy: "Peak load",
        capacityFactor: "60",
        biomassFuel: "Wood chip",
        existingBoilerEfficiency: "80",
        hoursOfHeatDemand: "3650",
        netCalorificValueOfDryFuel: "5.25",
        moistureContent: "35",
        efficiencyOfBiomassPlant: "80",
        annualDeliveredHeatDemand: "",
        averageLoad: "",
        peakLoad: "",
        annualDeliveredHeatDemandUsingBiomassBoiler: "",
        sizeOfBiomassBoiler: "",
        netCVOfFuelAsReceived: "",
        deliveredHeatPerUnitMassOfFuel: "",
        fuelUsage: "",
        unitInstallationCostOfBiomassBoiler: "3280",
        initialInvestmentForBiomassSystem: "",
        unitPriceOfFuel: "80",
        annualCostOfBiomassFuel: "",
        unitPriceOfGridGas: "",
        annualCostOfGridGasInPresenceOfBiomassBoiler: "",
        annualCostOfGridGasInAbsenceOfBiomassBoile: "",
        annualOperationalCostSavings: "",
        netPresentValueOfOperationalEnergyCostSavings: "",
        emissionFactorOfGridGas: "",
        emissionFactorOfBiomassFuel: "0.01579",
        gHGEmissionsForHeatInAbsenceOfBiomassSystem: "",
        gHGEmissionsForHeatInPresenceOfBiomassSystem: "",
        annualOperationalEmissionSavings: "",
        totalOperationalEmissionSavingsAcrossAbatementPeriod: "",
        totalOperationalEmissionSavingsAcrossAbatementPeriodTon: "",
        costEffectivenessConsideringOperationalEmissionSavingsOnly: "",
        isComplete: false,
        isSelected: false
    },
    chp: {
        averageAnnualElectricityRequirements: "",
        numberOfHoursOfElectricityDemand: "5000",
        averageAnnualGasRequirements: "",
        numberOfHoursOfHeatDemand: "6000",
        annualElectricityYouWantToGetFromCHPSystem: "80",
        annualHeatYouWantToGetFromCHPSystem: "50",
        loadsAreToBeSupplied: "Hot water only",
        cHPFuel: "Natural Gas",
        cHPSystem: "Reciprocating Engine",
        cHPSystemPrimeMoverTechnology: "Reciprocating Engine",
        averageElectricityLoad: "",
        existingBoilerEfficiency: "80",
        electricalEfficiency: "29",
        thermalEfficiency: "53",
        heatToPowerRatioForSite: "",
        averageLoadHeatDemand: "",
        annualDeliveredHeatDemandUsingCHPSystemInsteadOfGridGas: "",
        baseLoadHeatDemand: "",
        annualElectricityDeliveredUsingCHPSystemInsteadOfGridGas: "",
        sizeOfCHPSystem: "",
        fuelUsage: "",
        unitInstallationCostOfCHPSystem: "2262",
        initialInvestmentForCHPSystem: "",
        unitPriceOfElectricity: "",
        annualCostOfElectricityInAbsenceOfCHPSystem: "",
        unitPriceOfNaturalGas: "",
        annualCostOfGridGasInAbsenceOfCHPSystem: "",
        annualCostOfCHPFuel: "",
        annualCostOfGridElectricityInPresenceOfCHPSystem: "",
        annualCostOfGridGasInPresenceOfCHPSystem: "",
        annualOperationalCostSavings: "",
        netPresentValueOfOperationalEnergyCostSavings: "",
        emissionFactorForGridGas: "",
        gHGEmissionsForHeatInAbsenceOfCHPSystem: "",
        emissionFactorOfGridElectricity: "",
        gHGEmissionsForElectricityInAbsenceOfCHPSystem: "",
        gHGEmissionsForElectricityInPresenceOfCHPSystem: "",
        annualOperationalEmissionSavings: "",
        totalOperationalEmissionSavingsAbatementPeriod: "",
        totalOperationalEmissionSavingsAcrossAbatementPeriodTon: "",
        costEffectivenessConsideringOperationalEmissionSavingsOnly: "",
        isComplete: false,
        isSelected: false
    },
    led: {
        currentTypeOfLighting: "Incandescent Bulb",
        currentLightingPowerRating: "60",
        numberOfUnits: "50",
        dailyUsage: "16",
        numberOfOperationalDaysInaYear: "200",
        annualUsage: "",
        lEDPowerRating: "",
        unitCostForLED: "9",
        initialInvestmentForLEDs: "",
        costofElectricityWithCurrentLighting: "",
        costOfElectricityWithLEDs: "",
        annualOperationalEmissionSavings: "",
        totalOperationalEmissionSavingsAcrossAbatementPeriod: "",
        annualElectricityConsumptionWithCurrentLighting: "",
        annualElectricityConsumptionWithLEDs: "",
        annualElectricitySavingsWithLEDs: "",
        annualOperationalCostSavings: "",
        netPresentValueOfOperationalEnergyCostSavings: "",
        totalOperationalEmissionSavingsAcrossAbatementPeriodTon: "",
        costEffectivenessConsideringOperationalEmissionSavingsOnly: "",
        isComplete: false,
        isSelected: false
    },
    passiveInfraredSensor: {
        numberOfLamps: "50",
        wattageOfLamp: "60",
        numberOfDaysInYear: "200",
        estimatedHoursONPerDay: "16",
        estimatedHoursOccupiedPerDay: "12",
        areaOfIndustrialFacility: "5000",
        detectionRangeOfPIRSensors: "491",
        numberOfPIRSensors: "",
        annualElectricityConsumptionWithoutPirSensor: "",
        annualElectricityConsumptionWithPirSensorInstalled: "",
        annualElectricitySavingsWithPirSensors: "",
        unitCostOfPirSensor: "140",
        initialInvestmentForPir: "",
        annualOperationalCostSavings: "",
        netPresentValueOfOperationalEnergyCostSaings: "",
        annualOperationalEmissionSavings: "",
        totalOperationalEmissionSavingsAcrossAbatementPeriod: "",
        costEffectivenessConsideringOperationalEmissionSavingsOnly: "",
        totalOperationalEmissionSavingsAcrossAbatementPeriodTon: "",
        isComplete: false,
        isSelected: false
    },
    smartMetersElectricity: {
        averageAnnualElectricityConsumption: "",
        averageElectricitySavingsIncentivisedUsingSmartMeter: "2.80",
        annualElectricitySavingsWithSmartMeters: "",
        annualOperationalCostSavings: "",
        initialInvestmentForElectricitySmartMeter: "136.00",
        netPresentValueOfOperationalEnergyCostSavings: "",
        annualOperationalEmissionSavings: "",
        totalOperationalEmissionSavingsAcrossAbatementPeriod: "",
        totalOperationalEmissionSavingsAcrossAbatementPeriodTon: "",
        costEffectivenessConsideringOperationalEmissionSavingsOnly: "",
        isComplete: false,
        isSelected: false
    },
    smartMetersGas: {
        averageAnnualGasConsumption: "",
        averageGasSavingsIncentivisedUsingSmartMeter: "4.50",
        annualGasConsumptionWithSmartMeters: "",
        initialInvestmentForGasSmartMeter: "136.00",
        annualOperationalCostSavings: "",
        netPresentValueOfOperationalEnergyCostSavings: "",
        annualOperationalEmissionSavings: "",
        totalOperationalEmissionSavingsAcrossAbatementPeriod: "",
        totalOperationalEmissionSavingsAcrossAbatementPeriodTon: "",
        costEffectivenessConsideringOperationalEmissionSavingsOnly: "",
        isComplete: false,
        isSelected: false
    },
    voltageOptimisation: {
        averageAnnualElectricityConsumption: "",
        averageElectricitySavingsUsingVoltageOptimisation: "13",
        annualElectricitySavingsWithVoltageOptimisation: "",
        annualOperationalCostSavings: "",
        initialInvestmentForVoltageOptimisation: "7500",
        netPresentValueOfOperationalEnergyCostSavings: "",
        annualOperationalEmissionSavings: "",
        totalOperationalEmissionSavingsAcrossAbatementPeriod: "",
        totalOperationalEmissionSavingsAcrossAbatementPeriodTon: "",
        costEffectivenessConsideringOperationalEmissionSavingsOnly: "",
        isComplete: false,
        isSelected: false
    },
    energyManagementSystem: {
        averageAnnualElectricityConsumption: "",
        averageAnnualGasConsumption: "",
        averageElectricitySavingsIncentivisedUsingBEMS: "12",
        averageGasSavingsIncentivisedUsingBEMS: "9",
        annualElectricitySavingsWithBEMS: "",
        annualGasSavingsWithBEMS: "",
        initialInvestmentForBEMS: "5000",
        annualOperationalElectricityCostSavings: "",
        annualOperationalGasCostSavings: "",
        totalAnnualOperationalCostSavings: "",
        totalOperationalEmissionSavingsAbatementPeriod: "",
        netPresentValueOfOperationalEnergyCostSavings: "",
        gHGEmissionsSavingsForElectricityWithBEMS: "",
        gHGEmissionsSavingsForGasWithBEMS: "",
        annualOperationalEmissionSavings: "",
        totalOperationalEmissionSavingsAcrossAbatementPeriodTon: "",
        costEffectivenessConsideringOperationalEmissionSavingsOnly: "",
        isComplete: false,
        isSelected: false
    },
    solarThermal: {
        averageAnnualGasRequirements: "",
        heatDemandToBeTakenFromSolarThermalSystem: "50",
        location: "",
        latitudeLongitude: "",
        existingBoilerEfficiency: "80",
        incidentSolarIrradiation: "",
        annualSolarIrradiation: "",
        solarThermalSystemType: "High performance FPC",
        opticalEfficiency: "0.77",
        firstOrderEfficiencyCoefficient: "3.45",
        secondOrderEfficiencyCoefficient: "0.0083",
        ambientTemperature: "",
        inletTemperature: "283.15",
        outletTemperature: "353.00",
        collectorTemperature: "",
        efficiencyOfSolarThermalSystem: "",
        capacityOfSolarThermalSystem: "",
        annualGridGasSavingInPresenceOfSolarThermalSystem: "",
        sizeOfSolarThermalSystem: "",
        unitInstallationCostOfSolarThermalSystem: "245",
        initialInvestmentForSolarThermalSystem: "",
        unitPriceOfGridGas: "",
        annualOperationalCostSavings: "",
        netPresentValueOfOperationalEnergyCostSavings: "",
        emissionFactorOfGridGas: "",
        annualOperationalEmissionSavings: "",
        totalOperationalEmissionSavingsAcrossAbatementPeriod: "",
        totalOperationalEmissionSavingsAcrossAbatementPeriodTon: "",
        costEffectivenessConsideringOperationalEmissionSavingsOnly: "",
        isComplete: false,
        isSelected: false
    },
    industrialHeatPump: {
        averageAnnualGasRequirements: "",
        heatLoadIsAtTemperaturesBelow100C: "85",
        heatLoadIsAtTemperaturesBetween100C150C: "10",
        existingBoilerEfficiency: "80",
        hoursOfHeatDemand: "2920",
        annualHeatLoad: "",
        annualGridGasSavingInPresenceOfIHP1: "",
        ihpTypeIhp1: "Vapor Compression Cycle",
        copForIhp1: 3.9,
        heatSourceTemperature: "75",
        heatSinkTemperature: "120",
        temperatureLift: "",
        refrigerant: "R245fa",
        coefficientOfPerformanceOfIHP1: "4.2",
        electricityInput: "",
        annualGridGasSavingInPresenceOfIHP2: "",
        coefficientOfPerformanceOfIHP2: "",
        electricityInputForIHP2: "",
        sizeOfIndustrialHeatPump1: "",
        annualElectricityInputToIHP1: "",
        sizeOfIndustrialHeatPump2: "",
        annualElectricityInputToIHP2: "",
        unitInstallationCostOfIHP: "",
        initialInvestmentForIHP1: "",
        initialInvestmentForIHP2: "",
        unitPriceOfElectricity: "",
        annualCostOfElectricityForIHP1: "",
        annualCostOfElectricityForIHP2: "",
        unitPriceOfGridGas: "",
        annualCostSavingsForGridGas: "",
        annualCostOfElectricityForIHPs: "",
        annualOperationalCostSavings: "",
        netPresentValueOfOperationalEnergyCostSavings: "",
        emissionFactorOfGridGas: "",
        emissionFactorOfElectricityUsedForIHPs: "",
        gHGEmissionsForHeatInAbsenceOfIHP: "",
        gHGEmissionsForHeatInPresenceOfIHP: "",
        annualOperationalEmissionSavings: "",
        totalOperationalEmissionSavingsAcrossAbatementPeriod: "",
        totalOperationalEmissionSavingsAcrossAbatementPeriodTon: "",
        costEffectivenessConsideringOperationalEmissionSavingsOnly: "",
        isComplete: false,
        isSelected: false
    },
    emissionSavings: {
        isComplete: false
    },
    macc: {
        isComplete: false
    },
    paretoOptimisation: {
        isComplete: false
    }

};

const updateModule2Data = (data) => {
    let userData = localStorage.getItem('user');
    if (userData) {
        let parsedUserData = JSON.parse(userData);
        userService.updateModule2(parsedUserData._id, data).then(data => {
            console.log("data ==>", data);
        },
            (error) => {
                console.log("error ==>", error);
            });
    }
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_MODULE2:
            return { data: payload };
        case UPDATE_BASELINE:
            let baselineData = {
                ...state,
                baseline: payload
            }
            // updateModule2Data(baselineData);
            return baselineData
        case UPDATE_TECHNOLOGIES:
            let technologies =  {
                ...state,
                technologies: payload
            }
            // updateModule2Data(technologies);
            return technologies;
        case UPDATE_ECONOMIC_PARAMETERS:
            let economicParameters =  {
                ...state,
                economicParameters: payload
            }
            // updateModule2Data(economicParameters);
            return economicParameters;
        case UPDATE_SOLAR_PV:
            let solarPV = {
                ...state,
                solarPV: payload
            }
            // updateModule2Data(solarPV);
            return solarPV;
        case UPDATE_WIND:
            let wind = {
                ...state,
                wind: payload
            }
            // updateModule2Data(wind);
            return wind;
        case UPDATE_SOLAR_PV_BESS:
            let solarPvBess = {
                ...state,
                solarPvBess: payload
            }
            // updateModule2Data(solarPvBess);
            return solarPvBess;
        case UPDATE_BIOMASS:
            let biomass = {
                ...state,
                biomass: payload
            }
            // updateModule2Data(biomass);
            return biomass;
        case UPDATE_CHP:
            let chp = {
                ...state,
                chp: payload
            }
            // updateModule2Data(chp);
            return chp;
        case UPDATE_LED:
            let led = {
                ...state,
                led: payload
            }
            // updateModule2Data(led);
            return led;
        case UPDATE_PASSIVE_INFRARED_SENSOR:
            let passiveInfraredSensor = {
                ...state,
                passiveInfraredSensor: payload
            }
            // updateModule2Data(passiveInfraredSensor);
            return passiveInfraredSensor;
        case UPDATE_SMART_METERS_ELECTRICITY:
            let smartMetersElectricity =  {
                ...state,
                smartMetersElectricity: payload
            }
            // updateModule2Data(smartMetersElectricity);
            return smartMetersElectricity;
        case UPDATE_SMART_METERS_GAS:
            let smartMetersGas = {
                ...state,
                smartMetersGas: payload
            }
            // updateModule2Data(smartMetersGas);
            return smartMetersGas; 
        case UPDATE_VOLTAGE_OPTIMISATION:
            let voltageOptimisation = {
                ...state,
                voltageOptimisation: payload
            }
            // updateModule2Data(voltageOptimisation);
            return voltageOptimisation; 
        case UPDATE_ENERGY_MANAGEMENT_SYSTEM:
            let energyManagementSystem = {
                ...state,
                energyManagementSystem: payload
            }
            // updateModule2Data(energyManagementSystem);
            return energyManagementSystem; 
        case UPDATE_SOLAR_THERMAL:
            let solarThermal = {
                ...state,
                solarThermal: payload
            }
            // updateModule2Data(solarThermal);
            return solarThermal; 
        case UPDATE_INDUSTRIAL_HEAT_PUMP:
            let industrialHeatPump = {
                ...state,
                industrialHeatPump: payload
            }
            // updateModule2Data(industrialHeatPump);
            return industrialHeatPump; 
        case UPDATE_EMISSION_SAVINGS:
            let emissionSavings = {
                ...state,
                emissionSavings: payload
            }
            // updateModule2Data(emissionSavings);
            return emissionSavings; 
        case UPDATE_MACC:
            let macc = {
                ...state,
                macc: payload
            }
            // updateModule2Data(macc);
            return macc; 
        case UPDATE_PARETO_OPTIMISATION:
            let paretoOptimisation = {
                ...state,
                paretoOptimisation: payload
            }
            // updateModule2Data(paretoOptimisation);
            return paretoOptimisation; 
        case UPDATE_NAVIGATION:
            let navigation = {
                ...state,
                navigation: [...payload]
            }
            return navigation
        default:
            return state;
    }
}