const connectToDevice = async () => {
        try {
          // Request permission to access the serial device
          const port = await navigator.serial.requestPort();

          // Open the connection to the device
          await port.open({ baudRate: 9600 });

          // Send data to the device
          const writer = port.writable.getWriter();
          await writer.write(new TextEncoder().encode('argjnkogadfrkol'));

          // Receive data from the device
          const reader = port.readable.getReader();
          const result = await reader.read();
          const response = new TextDecoder().decode(result.value);
          console.log(`Response: ${response}`);

          // Close the connection to the device
          await port.close();
        } catch (error) {
          console.log(`Error: ${error}`);
        }
      };
