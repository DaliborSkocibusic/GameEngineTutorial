#include "pch.h"
#include <gtest/gtest.h>

#include "./../MyConsolandances/Header.h"
TEST(TestCaseName, BobTest) {
  EXPECT_EQ(1, 1);
  EXPECT_TRUE(true);
  EXPECT_EQ("BOB", test());

  
}


TEST(TestCaseName, PassTest) {
	EXPECT_EQ(1, 1);
	EXPECT_TRUE(true);
	EXPECT_EQ("Test", test());

}