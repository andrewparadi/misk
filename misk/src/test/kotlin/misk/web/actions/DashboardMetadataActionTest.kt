package misk.web.actions

import com.squareup.moshi.Moshi
import misk.client.HttpClientEndpointConfig
import misk.client.HttpClientFactory
import misk.moshi.adapter
import misk.security.authz.FakeCallerAuthenticator
import misk.testing.MiskTest
import misk.testing.MiskTestModule
import misk.web.jetty.JettyService
import okhttp3.OkHttpClient
import okhttp3.Request
import org.junit.jupiter.api.Test
import javax.inject.Inject
import kotlin.test.assertEquals
import kotlin.test.assertNotNull

@MiskTest(startService = true)
class DashboardMetadataActionTest {
  @MiskTestModule
  val module = AdminDashboardActionTestingModule()

  @Inject private lateinit var jetty: JettyService
  @Inject private lateinit var httpClientFactory: HttpClientFactory

  val path = "/api/dashboard/metadata/"
  val defaultDashboard = AdminDashboard::class.simpleName!!

  @Test fun customCapabilityAccess_unauthenticated() {
    val response = executeRequest(path = path + defaultDashboard)
    assertEquals(0, response.dashboardMetadata.tabs.size)
  }

  @Test fun customCapabilityAccess_unauthorized() {
    val response = executeRequest(
      path = path + defaultDashboard,
      user = "sandy",
      capabilities = "guest"
    )
    assertEquals(0, response.dashboardMetadata.tabs.size)
  }

  @Test fun customCapabilityAccess_authorized() {
    val response = executeRequest(
      path = path + defaultDashboard,
      user = "sandy",
      capabilities = "admin_access"
    )
    assertEquals(2, response.dashboardMetadata.tabs.size)
    assertNotNull(response.dashboardMetadata.tabs.find { it.name == "Config" })
    assertNotNull(response.dashboardMetadata.tabs.find { it.name == "Web Actions" })
  }

  @Test fun loadOtherDashboardTabs() {
    val dashboard = DashboardMetadataActionTestDashboard::class.simpleName!!
    val response = executeRequest(
      path = path + dashboard,
      user = "sandy",
      capabilities = "test_admin_access"
    )
    assertEquals(1, response.dashboardMetadata.tabs.size)
    assertNotNull(response.dashboardMetadata.tabs.find { it.name == "Test Dashboard Tab" })
  }

  @Test fun loadDashboardNavbarItems() {
    val dashboard = DashboardMetadataActionTestDashboard::class.simpleName!!
    val response = executeRequest(
      path = path + dashboard,
      user = "sandy",
      capabilities = "test_admin_access"
    )
    assertEquals(1, response.dashboardMetadata.navbar_items.size)
    assertEquals("<a href=\"https://cash.app/\">Test Navbar Link</a>",
      response.dashboardMetadata.navbar_items.first())
  }

  @Test fun loadDashboardNavbarStatus() {
    val dashboard = DashboardMetadataActionTestDashboard::class.simpleName!!
    val response = executeRequest(
      path = path + dashboard,
      user = "sandy",
      capabilities = "test_admin_access"
    )
    assertEquals("Test Status", response.dashboardMetadata.navbar_status)
  }

  private fun executeRequest(
    path: String = "/",
    service: String? = null,
    user: String? = null,
    capabilities: String? = null
  ): DashboardMetadataAction.Response {
    val client = createOkHttpClient()

    val baseUrl = jetty.httpServerUrl
    val requestBuilder = Request.Builder()
      .url(baseUrl.resolve(path)!!)
    service?.let {
      requestBuilder.header(FakeCallerAuthenticator.SERVICE_HEADER, service)
    }
    user?.let {
      requestBuilder.header(FakeCallerAuthenticator.USER_HEADER, user)
    }
    capabilities?.let {
      requestBuilder.header(FakeCallerAuthenticator.CAPABILITIES_HEADER, capabilities)
    }
    val call = client.newCall(requestBuilder.build())
    val response = call.execute()

    val moshi = Moshi.Builder().build()
    val responseAdaptor = moshi.adapter<DashboardMetadataAction.Response>()
    return responseAdaptor.fromJson(response.body!!.source())!!
  }

  private fun createOkHttpClient(): OkHttpClient {
    val config = HttpClientEndpointConfig(jetty.httpServerUrl.toString())
    return httpClientFactory.create(config)
  }
}
